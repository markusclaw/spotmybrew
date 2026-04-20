'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import RatingForm from '@/components/RatingForm';
import { authService } from '@/lib/auth';

interface Beer {
  id: string;
  name: string;
  brewery: string;
  origin: string;
  state?: string;
  city?: string;
  style: string;
  color: string;
  abv: number;
  ibu: number;
  description: string;
  rating?: number;
  reviews?: number;
}

interface Rating {
  id: string;
  userId: string;
  username: string;
  avatar_url: string;
  score: number;
  review_text?: string;
  created_at: string;
}

export default function BeerDetail() {
  const params = useParams();
  const beerId = params.id as string;

  const [beer, setBeer] = useState<Beer | null>(null);
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [userRating, setUserRating] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [user, setUser] = useState<any>(null);

  const colorMap: Record<string, string> = {
    'Pale': '#FFF44F',
    'Golden': '#FFD54F',
    'Amber': '#FFA726',
    'Copper': '#D2691E',
    'Red/Amber': '#CD5C5C',
    'Brown': '#8B4513',
    'Black': '#2C2C2C',
    'Dark Brown': '#6D4C41',
  };

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const authUser = authService.getUser();
        setUser(authUser);

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/beers/${beerId}`, {
          headers: authUser
            ? { 'Authorization': `Bearer ${authService.getToken()}` }
            : {},
        });

        if (!res.ok) {
          setError('Beer not found');
          setLoading(false);
          return;
        }

        const data = await res.json();
        setBeer(data.beer);
        setRatings(data.ratings || []);
        setUserRating(data.userRating);
      } catch (e) {
        setError('Failed to load beer');
      } finally {
        setLoading(false);
      }
    };

    fetchBeer();
  }, [beerId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white p-4 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error || !beer) {
    return (
      <div className="min-h-screen bg-white p-4">
        <div className="max-w-2xl mx-auto text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">404</h1>
          <p className="text-gray-600 mb-6">{error || 'Beer not found'}</p>
          <Link href="/browse" className="text-amber-600 hover:text-amber-700 font-semibold">
            ← Back to Browse
          </Link>
        </div>
      </div>
    );
  }

  const bgColor = colorMap[beer.color] || '#FFD54F';

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Back Button */}
        <Link href="/browse" className="text-amber-600 hover:text-amber-700 font-semibold mb-6 inline-block">
          ← Back to Browse
        </Link>

        {/* Beer Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Image */}
          <div className="md:col-span-1 flex items-start justify-center">
            <div
              className="h-64 w-40 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${bgColor}, ${bgColor}cc)`,
              }}
            >
              <Image
                src="/beer-bottle.png"
                alt={beer.name}
                width={80}
                height={160}
                className="object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{beer.name}</h1>
              <p className="text-lg text-gray-600">{beer.brewery}</p>
              {beer.city && (
                <p className="text-sm text-gray-500">{beer.city}, {beer.state || beer.origin}</p>
              )}
            </div>

            {/* Rating Summary */}
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-3xl font-bold text-gray-900">
                    {beer.rating ? beer.rating.toFixed(1) : 'N/A'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {beer.reviews || 0} ratings
                  </p>
                </div>
                <div className="text-yellow-400 text-4xl">★</div>
              </div>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600">Style</p>
                <p className="font-semibold text-gray-900">{beer.style}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600">ABV</p>
                <p className="font-semibold text-gray-900">{beer.abv.toFixed(1)}%</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs text-gray-600">IBU</p>
                <p className="font-semibold text-gray-900">{beer.ibu}</p>
              </div>
            </div>

            {/* Actions */}
            {user && (
              <div className="flex gap-3">
                <button className="flex-1 bg-red-100 text-red-600 py-2 rounded-lg font-semibold hover:bg-red-200 transition">
                  ♥ Like
                </button>
                <button className="flex-1 bg-amber-100 text-amber-600 py-2 rounded-lg font-semibold hover:bg-amber-200 transition">
                  ✓ Save
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="font-bold text-gray-900 mb-2">About</h2>
          <p className="text-gray-700 leading-relaxed">{beer.description}</p>
        </div>

        {/* Rating Form */}
        {user ? (
          <div className="mb-8">
            <RatingForm
              beerId={beerId}
              userRating={userRating}
              onRatingSubmitted={() => window.location.reload()}
            />
          </div>
        ) : (
          <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800">
              <Link href="/login" className="font-semibold underline">
                Sign in
              </Link>
              {' '}to rate and review this beer.
            </p>
          </div>
        )}

        {/* Ratings Section */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tasting Notes ({ratings.length})
          </h2>

          {ratings.length === 0 ? (
            <p className="text-gray-600 py-6">No tasting notes yet. Be the first to review!</p>
          ) : (
            <div className="space-y-4">
              {ratings.map((rating) => (
                <div key={rating.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-gray-900">{rating.username}</p>
                      <p className="text-xs text-gray-500">
                        {new Date(rating.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-yellow-400">
                      {Array(rating.score)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                    </div>
                  </div>
                  {rating.review_text && (
                    <p className="text-gray-700">{rating.review_text}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
