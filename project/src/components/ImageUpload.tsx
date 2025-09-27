import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
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

  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      alert('画像ファイルを選択してください');
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('ファイルサイズは5MB以下にしてください');
      return;
    }

    setIsUploading(true);

    // Convert to base64 for local storage
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        onChange(e.target.result as string);
        setIsUploading(false);
      }
    };
    reader.onerror = () => {
      alert('画像の読み込みに失敗しました');
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    onChange('');
  };

  const handleUrlInput = (url: string) => {
    onChange(url);
  };

  return (
    <div className="space-y-4">
      {/* Path Input for Production */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          画像パス
        </label>
        <input
          type="text"
          value={value.startsWith('data:') ? '' : value}
          onChange={(e) => handleUrlInput(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="/images/news/example.jpg"
          disabled={value.startsWith('data:')}
        />
        <p className="mt-1 text-sm text-gray-500">
          本番環境: /images/フォルダに画像を配置し、パスを入力してください
        </p>
      </div>

      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="text-sm text-gray-500 px-2">または</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

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
            ${isUploading ? 'pointer-events-none opacity-50' : ''}
          `}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
          />

          {value && !value.startsWith('http') ? (
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
          ) : (
            // Upload prompt
            <div className="space-y-4">
              <div className="flex justify-center">
                {isUploading ? (
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                ) : (
                  <Upload className="h-12 w-12 text-gray-400" />
                )}
              </div>
              <div>
                <p className="text-base font-medium text-gray-700">
                  クリックまたはドラッグ&ドロップ
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  PNG, JPG, GIF (最大5MB)
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Show path preview if path is entered */}
        {value && !value.startsWith('data:') && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ImageIcon className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-600 truncate max-w-md">
                  {value}
                </span>
              </div>
              <button
                type="button"
                onClick={handleRemove}
                className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="text-sm text-gray-500">
        開発環境: ドラッグ&ドロップで画像をアップロード<br/>
        本番環境: /images/フォルダに画像を配置後、パスを入力
      </p>
    </div>
  );
};

export default ImageUpload;