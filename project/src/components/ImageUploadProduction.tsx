import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon, Cloud } from 'lucide-react';

interface ImageUploadProductionProps {
  value: string;
  onChange: (value: string) => void;
}

// 本番環境用の画像アップロードコンポーネント例
// クラウドストレージ（AWS S3, Cloudinary等）と連携
const ImageUploadProduction: React.FC<ImageUploadProductionProps> = ({ value, onChange }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = async (file: File) => {
    // ファイル検証
    if (!file.type.startsWith('image/')) {
      alert('画像ファイルを選択してください');
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 本番環境では10MBまで許可
      alert('ファイルサイズは10MB以下にしてください');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // ========== 本番環境での実装例 ==========

      // 1. Cloudinary を使用する場合（推奨）
      // Cloudinaryは無料プランでも十分な容量があり、APIが簡単
      const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload';
      const CLOUDINARY_PRESET = 'YOUR_UPLOAD_PRESET'; // Cloudinaryの管理画面で設定

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_PRESET);

      // アップロード進捗を表示
      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const progress = Math.round((e.loaded / e.total) * 100);
          setUploadProgress(progress);
        }
      });

      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          onChange(response.secure_url); // CloudinaryのURLを保存
          setIsUploading(false);
          setUploadProgress(0);
        }
      };

      xhr.onerror = () => {
        alert('アップロードに失敗しました');
        setIsUploading(false);
        setUploadProgress(0);
      };

      xhr.open('POST', CLOUDINARY_URL);
      xhr.send(formData);

      // ========== 代替実装例 2: AWS S3 ==========
      /*
      // バックエンドから署名付きURLを取得
      const response = await fetch('/api/upload/presigned-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileName: file.name,
          fileType: file.type
        })
      });

      const { presignedUrl, fileUrl } = await response.json();

      // S3に直接アップロード
      await fetch(presignedUrl, {
        method: 'PUT',
        body: file,
        headers: { 'Content-Type': file.type }
      });

      onChange(fileUrl);
      */

      // ========== 代替実装例 3: 自前のサーバー ==========
      /*
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      const { imageUrl } = await response.json();
      onChange(imageUrl);
      */

    } catch (error) {
      console.error('Upload error:', error);
      alert('アップロードに失敗しました');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleRemove = () => {
    onChange('');
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        画像アップロード
      </label>

      {/* Drag & Drop Area */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`
          relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all
          ${isDragActive
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
          }
          ${isUploading ? 'pointer-events-none' : ''}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />

        {value ? (
          // Preview uploaded image
          <div className="relative">
            <img
              src={value}
              alt="アップロード済み画像"
              className="max-h-48 mx-auto rounded-lg"
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}
              className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : isUploading ? (
          // Upload progress
          <div className="space-y-4">
            <Cloud className="h-12 w-12 text-blue-500 mx-auto animate-pulse" />
            <div className="w-full bg-gray-200 rounded-full h-2 max-w-xs mx-auto">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">
              アップロード中... {uploadProgress}%
            </p>
          </div>
        ) : (
          // Upload prompt
          <div className="space-y-4">
            <Upload className="h-12 w-12 text-gray-400 mx-auto" />
            <div>
              <p className="text-base font-medium text-gray-700">
                クリックまたはドラッグ&ドロップ
              </p>
              <p className="text-sm text-gray-500 mt-1">
                PNG, JPG, WEBP, GIF (最大10MB)
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex gap-2">
          <Cloud className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-blue-900">
              本番環境での画像管理
            </p>
            <p className="text-sm text-blue-700 mt-1">
              クラウドストレージに自動アップロードされ、
              全てのユーザーが閲覧可能になります
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadProduction;