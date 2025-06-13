import React, { useState, useEffect } from "react";
import { Star, X, Upload, Trash, Image as Imageic } from "lucide-react";
import Image from "next/image";

interface Review {
  name?: string;
  email?: string;
  rating?: number;
  review?: string;
  company?: string;
  dynamic_link?: string;
  is_dynamic?: boolean;
  service_id?: number;
  images?: string[];
  showOnLanding?: boolean;
}

interface EditData extends Review {
  newImages?: string[];
}

interface ReviewModalProps {
  onClose: () => void;
  review: Review | null;
  onSave: (data: EditData) => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  onClose,
  review,
  onSave,
}) => {
  const [editData, setEditData] = useState<EditData>({});
  const [newImages, setNewImages] = useState<string[]>([]);

  useEffect(() => {
    if (review) {
      setEditData({
        name: review.name || "",
        email: review.email || "",
        rating: review.rating || 0,
        review: review.review || "",
        company: review.company || "",
        dynamic_link: review.dynamic_link || "",
        is_dynamic: review.is_dynamic || false,
        service_id: review.service_id || -1,
        images: review.images || [],
        showOnLanding: review.showOnLanding || false,
      });
      setNewImages([]);
    }
  }, [review]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setNewImages((prev) => [...prev, ...imageUrls]);
  };

  const removeImage = (index: number, isExisting: boolean = false) => {
    if (isExisting) {
      setEditData((prev) => ({
        ...prev,
        images: prev.images?.filter((_, i) => i !== index) || [],
      }));
    } else {
      setNewImages((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleSave = () => {
    const updatedData: EditData = {
      ...editData,
      newImages: newImages,
    };
    onSave(updatedData);
    onClose();
  };

  const handleClose = () => {
    setEditData({});
    setNewImages([]);
    onClose();
  };

  const toggleLandingPage = () => {
    setEditData((prev) => ({
      ...prev,
      showOnLanding: !prev.showOnLanding,
    }));
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <h2 className="text-2xl font-bold text-white">Edit Review</h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors p-2"
            >
              <X size={24} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  disabled
                  type="text"
                  value={editData.name || ""}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  disabled
                  type="email"
                  value={editData.email || ""}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  disabled
                  type="text"
                  value={editData.company || ""}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Service ID
                </label>
                <input
                  disabled
                  type="number"
                  value={editData.service_id || ""}
                  className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Rating
              </label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="transition-colors">
                    <Star
                      size={24}
                      className={`${
                        star <= (editData.rating || 0)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-600 hover:text-yellow-300"
                      }`}
                    />
                  </div>
                ))}
                <span className="text-white ml-2">
                  {editData.rating || 0}/5
                </span>
              </div>
            </div>

            {/* Review Text */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Review
              </label>
              <textarea
                disabled
                rows={4}
                value={editData.review || ""}
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Enter review text..."
              />
            </div>

            {/* Dynamic Link */}
            <div>
              <div className="flex items-center space-x-3">
                <span className="text-white font-medium">
                  Show on Landing Page
                </span>
                <button
                  onClick={toggleLandingPage}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#7F6456] focus:ring-offset-2 ${
                    editData.showOnLanding ? "bg-green-600" : "bg-[#e71e1e]"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      editData.showOnLanding ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Dynamic Link
              </label>
              <div className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  checked={editData.is_dynamic || false}
                  onChange={(e) =>
                    setEditData((prev) => ({
                      ...prev,
                      is_dynamic: e.target.checked,
                    }))
                  }
                  className="rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-300">Is Dynamic</span>
              </div>

              <input
                type="url"
                value={editData.dynamic_link || ""}
                onChange={(e) =>
                  setEditData((prev) => ({
                    ...prev,
                    dynamic_link: e.target.value,
                  }))
                }
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com"
              />
            </div>

            {/* Images Section */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Images
              </label>

              {/* Existing Images */}
              {editData.images && editData.images.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">
                    Current Images
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {editData.images.map((image, index) => (
                      <div key={index} className="relative group">
                        <div className="w-full h-24 bg-gray-700 rounded-lg flex items-center justify-center border border-gray-600">
                          <Imageic className="text-gray-400" size={24} />
                          <span className="text-xs text-gray-400 ml-2 truncate">
                            {image}
                          </span>
                        </div>
                        <button
                          onClick={() => removeImage(index, true)}
                          className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* New Images */}
              {newImages.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">
                    New Images
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {newImages.map((image, index) => (
                      <div key={index} className="relative group">
                        <Image
                          fill
                          src={image}
                          alt={`New ${index + 1}`}
                          className="w-full h-24 object-cover rounded-lg border border-gray-600"
                        />
                        <button
                          onClick={() => removeImage(index, false)}
                          className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Upload New Images */}
              <div>
                <label className="flex items-center justify-center w-full h-24 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                  <div className="flex flex-col items-center">
                    <Upload className="text-gray-400 mb-2" size={24} />
                    <span className="text-sm text-gray-400">Upload Images</span>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end gap-4 p-6 border-t border-gray-700">
            <button
              onClick={handleClose}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewModal;
