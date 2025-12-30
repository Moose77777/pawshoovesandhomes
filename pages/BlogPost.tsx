import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import SEO from '../components/SEO';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/resources" replace />;
  }

  // Fallback if content isn't defined yet in older constants
  const paragraphs = post.content || [post.excerpt];

  return (
    <div className="bg-white min-h-screen">
       <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
      />

      {/* Hero Header */}
      <div className="relative h-[400px] bg-brand-900">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 max-w-4xl mx-auto text-white">
           <Link to="/resources" className="inline-flex items-center text-brand-300 hover:text-white mb-6 transition-colors font-bold uppercase tracking-wide text-xs">
             <ArrowLeft size={16} className="mr-2" /> Back to Resources
           </Link>
           <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
           <div className="flex flex-wrap items-center gap-6 text-sm text-brand-200">
             <span className="flex items-center"><Calendar size={16} className="mr-2"/> {post.date}</span>
             <span className="flex items-center"><User size={16} className="mr-2"/> Harriet Lightfoot</span>
             <span className="flex items-center bg-brand-500/50 px-3 py-1 rounded-full"><Tag size={14} className="mr-2"/> {post.category}</span>
           </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-16">
         <div className="prose prose-lg prose-stone mx-auto">
            {paragraphs.map((para, idx) => (
                <p key={idx} className="mb-6 leading-relaxed text-stone-700 text-lg">
                    {para}
                </p>
            ))}
         </div>

         {/* Author Bio */}
         <div className="mt-16 p-8 bg-brand-50 rounded-2xl flex items-center gap-6 border border-brand-100">
            <img src="/images/harriet.jpg" alt="Harriet Lightfoot" className="w-20 h-20 rounded-full object-cover border-2 border-brand-300" />
            <div>
               <h3 className="font-bold text-brand-900 text-xl font-serif">Written by Harriet Lightfoot</h3>
               <p className="text-brand-700">Professional Pet Sitter with 40+ years of experience in equine and canine care. Serving Grantham and the Vale of Belvoir.</p>
            </div>
         </div>
         
         <div className="mt-12 text-center">
            <h3 className="font-bold text-2xl mb-4">Ready to book expert care?</h3>
            <Link to="/contact" className="inline-block bg-brand-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-brand-600 transition-colors">Contact Us Today</Link>
         </div>
      </div>
    </div>
  );
};

export default BlogPost;