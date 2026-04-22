'use client';

import { useState } from 'react';

interface RatingFormProps {
  beerId: string;
  userRating?: any;
  onRatingSubmitted: () => void;
}

export default function RatingForm({ beerId, userRating, onRatingSubmitted }: RatingFormProps) {
  const [score, setScore] = useState(userRating?.score || 0);
  const [review, setReview] = useState(userRating?.review_text || '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/beers/${beerId}/rate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ score, review_text: review }),
      });

      if (response.ok) {
        onRatingSubmitted();
      }
    } catch (err) {
      console.error('Failed to submit rating:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-amber-50 rounded-lg border border-amber-200">
      <h3 className="font-bold text-gray-900 mb-4">Rate This Beer</h3>

      {/* Star Rating */}
      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setScore(star)}
            className={`text-4xl transition ${
              star <= score ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </button>
        ))}
      </div>

      {/* Review Text */}
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Share your tasting notes..."
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 resize-none"
        rows={4}
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading || score === 0}
        className="w-full bg-amber-600 text-white py-2 rounded-lg font-semibold hover:bg-amber-700 disabled:opacity-50 transition"
      >
        {loading ? 'Submitting...' : userRating ? 'Update Rating' : 'Submit Rating'}
      </button>
    </form>
  );
}
