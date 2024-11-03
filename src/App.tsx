import React, { useState } from 'react';
import { ShoppingCart, Users, BookOpen } from 'lucide-react';

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  description: string;
}

interface ForumTopic {
  id: number;
  title: string;
  author: string;
  replies: number;
  lastActive: string;
}

const App = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'marketplace' | 'community'>('blog');

  const blogs: Blog[] = [
    {
      id: 1,
      title: "Getting Started with Composting",
      excerpt: "Learn the basics of home composting and turn your kitchen waste into garden gold.",
      author: "Emma Green",
      date: "2024-03-28",
      category: "Home & Garden"
    },
    {
      id: 2,
      title: "Zero-Waste Shopping Guide",
      excerpt: "Essential tips for reducing packaging waste while grocery shopping.",
      author: "Michael Rivers",
      date: "2024-03-25",
      category: "Lifestyle"
    },
    {
      id: 3,
      title: "DIY Natural Cleaning Products",
      excerpt: "Make your own eco-friendly cleaning solutions with simple ingredients.",
      author: "Sarah Bloom",
      date: "2024-04-01",
      category: "Home & Garden"
    },
    {
      id: 4,
      title: "Eco-Friendly Travel Tips",
      excerpt: "Explore sustainable travel options and reduce your environmental footprint.",
      author: "Liam Wood",
      date: "2024-04-05",
      category: "Travel"
    },
    {
      id: 5,
      title: "How to Start a Vegetable Garden",
      excerpt: "A beginner’s guide to growing your own vegetables at home.",
      author: "Emma Green",
      date: "2024-04-10",
      category: "Home & Garden"
    },
    {
      id: 6,
      title: "Sustainable Fashion on a Budget",
      excerpt: "Tips for building an eco-friendly wardrobe without breaking the bank.",
      author: "Olivia Moon",
      date: "2024-04-12",
      category: "Lifestyle"
    },
    {
      id: 7,
      title: "Benefits of a Plant-Based Diet",
      excerpt: "Discover how eating plant-based can benefit your health and the planet.",
      author: "John Leaf",
      date: "2024-04-15",
      category: "Health & Wellness"
    },
    {
      id: 8,
      title: "Green Energy Alternatives for Homes",
      excerpt: "Explore renewable energy options like solar and wind for a sustainable home.",
      author: "Michael Rivers",
      date: "2024-04-20",
      category: "Technology"
    },
    {
      id: 9,
      title: "Rainwater Harvesting 101",
      excerpt: "Learn the basics of collecting and using rainwater for your household needs.",
      author: "Emma Green",
      date: "2024-04-22",
      category: "Home & Garden"
    },
    {
      id: 10,
      title: "Eco-Friendly Baby Products",
      excerpt: "A guide to choosing sustainable, safe products for your little one.",
      author: "Sophia Lake",
      date: "2024-04-25",
      category: "Family"
    },
    {
      id: 11,
      title: "Urban Beekeeping: A Guide",
      excerpt: "How to start and maintain a beehive in your backyard or city rooftop.",
      author: "Tom Honeywell",
      date: "2024-04-30",
      category: "Home & Garden"
    },
    {
      id: 12,
      title: "Minimalism and Sustainable Living",
      excerpt: "Explore how a minimalist lifestyle can contribute to sustainability.",
      author: "Liam Wood",
      date: "2024-05-03",
      category: "Lifestyle"
    },
    {
      id: 13,
      title: "Upcycling Furniture: Creative Ideas",
      excerpt: "Turn old furniture into something new and unique with these upcycling ideas.",
      author: "Olivia Moon",
      date: "2024-05-07",
      category: "DIY"
    },
    {
      id: 14,
      title: "Sustainable Alternatives to Plastic",
      excerpt: "Discover materials and products to replace single-use plastics in daily life.",
      author: "Michael Rivers",
      date: "2024-05-10",
      category: "Lifestyle"
    },
    {
      id: 15,
      title: "How to Reduce Water Usage at Home",
      excerpt: "Practical tips for conserving water and lowering your household water bill.",
      author: "Sarah Bloom",
      date: "2024-05-12",
      category: "Home & Garden"
    },
    {
      id: 16,
      title: "Guide to Ethical Consumerism",
      excerpt: "Learn how to make ethical, sustainable choices when purchasing goods.",
      author: "John Leaf",
      date: "2024-05-15",
      category: "Lifestyle"
    }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Bamboo Utensil Set",
      price: 24.99,
      rating: 4.5,
      description: "Sustainable kitchen utensils made from organic bamboo"
    },
    {
      id: 2,
      name: "Reusable Produce Bags",
      price: 15.99,
      rating: 4.8,
      description: "Set of 5 mesh bags for plastic-free grocery shopping"
    },
    {
      id: 3,
      name: "Stainless Steel Straws",
      price: 11.99,
      rating: 4.9,
      description: "A set of reusable straws in various sizes, complete with cleaning brushes and a travel pouch."
    },
    
    {
      id: 4,
      name: "Compostable Phone Cases",
      price: 5.99,
      rating: 4.7,
      description: "Biodegradable phone cases made from materials like bamboo fiber or cornstarch that decompose at the end of their life."
    },
    
    {
      id: 5,
      name: "Beeswax Food Wraps",
      price: 6.99,
      rating: 4.5,
      description: "Natural, reusable wraps for keeping food fresh, as an alternative to plastic wrap. "
    },
    
    {
      id: 6,
      name: "Organic Cotton Tote Bags ",
      price: 8.99,
      rating: 4.8,
      description: "Sturdy, reusable tote bags for shopping, designed with minimalistic or eco-friendly prints."
    },
    
    {
      id: 7,
      name: "Silicone Food Storage Bags",
      price: 2.99,
      rating: 4.4,
      description: "Reusable, leakproof bags that can replace single-use plastic bags for storing food."
    },
    
    {
      id: 8,
      name: "Reusable Makeup Remover Pads",
      price: 1.99,
      rating: 4.9,
      description: "Soft, washable pads made from organic cotton or bamboo for eco-friendly skincare."
    },
    
    {
      id: 9,
      name: "Natural Loofah Scrubbers",
      price: 4.99,
      rating: 4.7,
      description: "Plant-based, biodegradable sponges perfect for both kitchen and body care."
    },
    
    {
      id: 10,
      name: "Biodegradable Dish Sponges",
      price: 1.99,
      rating: 4.9,
      description: "Made from natural fibers like coconut coir, these are compostable after use."
    }
  ];

  const forumTopics: ForumTopic[] = [
    {
      id: 1,
      title: "Tips for Reducing Energy Bills",
      author: "EcoSaver",
      replies: 23,
      lastActive: "23 mins ago"
    },
    {
      id: 2,
      title: "Best Local Farmers Markets?",
      author: "FreshFood",
      replies: 15,
      lastActive: "5 hours ago"
    },
    {
      id: 3,
      title: "Composting for Beginners",
      author: "GreenThumb",
      replies: 34,
      lastActive: "1 day ago"
    },
    {
      id: 4,
      title: "Favorite Eco-Friendly Products",
      author: "EarthLover",
      replies: 45,
      lastActive: "3 hours ago"
    },
    {
      id: 5,
      title: "Zero-Waste Lifestyle Challenges",
      author: "WasteNot",
      replies: 27,
      lastActive: "2 days ago"
    },
    {
      id: 6,
      title: "DIY Natural Cleaning Solutions",
      author: "CleanGreen",
      replies: 12,
      lastActive: "6 hours ago"
    },
    {
      id: 7,
      title: "How to Start a Home Garden?",
      author: "UrbanGardener",
      replies: 20,
      lastActive: "1 day ago"
    },
    {
      id: 8,
      title: "Electric vs Hybrid Cars",
      author: "EcoDriver",
      replies: 39,
      lastActive: "4 hours ago"
    },
    {
      id: 9,
      title: "Reducing Plastic Use in the Kitchen",
      author: "PlasticFree",
      replies: 18,
      lastActive: "7 hours ago"
    },
    {
      id: 10,
      title: "Eco-Friendly Travel Tips",
      author: "TravelGreen",
      replies: 22,
      lastActive: "1 day ago"
    },
    {
      id: 11,
      title: "Tips for Buying Ethical Clothing",
      author: "ConsciousConsumer",
      replies: 31,
      lastActive: "3 hours ago"
    },
    {
      id: 12,
      title: "How to Save Water at Home",
      author: "WaterWise",
      replies: 17,
      lastActive: "2 days ago"
    },
    {
      id: 13,
      title: "Upcycling Ideas for Old Furniture",
      author: "DIYer",
      replies: 25,
      lastActive: "8 hours ago"
    },
    {
      id: 14,
      title: "Sustainable Gift Ideas",
      author: "EcoGiftGiver",
      replies: 14,
      lastActive: "4 hours ago"
    },
    {
      id: 15,
      title: "Organic Gardening Tips",
      author: "GrowGreen",
      replies: 29,
      lastActive: "1 day ago"
    },
    {
      id: 16,
      title: "How to Get Involved in Local Cleanups",
      author: "EcoWarrior",
      replies: 10,
      lastActive: "12 hours ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">EcoHaven</h1>
          <p className="mt-2">Your Hub for Sustainable Living</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-around py-4">
            <button
              onClick={() => setActiveTab('blog')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'blog' ? 'bg-green-100 text-green-600' : 'text-gray-600'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span>Blog</span>
            </button>
            <button
              onClick={() => setActiveTab('marketplace')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'marketplace' ? 'bg-green-100 text-green-600' : 'text-gray-600'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Marketplace</span>
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                activeTab === 'community' ? 'bg-green-100 text-green-600' : 'text-gray-600'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Community</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'blog' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Latest Blog Posts</h2>
            {blogs.map(blog => (
              <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md">
                <span className="text-sm text-green-600">{blog.category}</span>
                <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                <div className="mt-4 text-sm text-gray-500">
                  <span>{blog.author}</span> • <span>{blog.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'marketplace' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Eco-Friendly Products</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {products.map(product => (
                <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                    <span className="text-green-600 font-bold">${product.price}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{product.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-yellow-500">★ {product.rating}</span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'community' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Community Forum</h2>
            {forumTopics.map(topic => (
              <div key={topic.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold">{topic.title}</h3>
                <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                  <span>Posted by {topic.author}</span>
                  <span>{topic.replies} replies</span>
                  <span>Last active: {topic.lastActive}</span>
                </div>
              </div>
            ))}
            <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Start New Discussion
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;