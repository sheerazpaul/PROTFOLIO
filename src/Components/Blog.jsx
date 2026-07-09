import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, ArrowUpRight, Tag } from "lucide-react";
import Profile from "../Profile.json";

const Blog = () => {
  const posts = Profile.posts || [];
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  if (posts.length === 0) return null;

  return (
    <motion.section
      ref={ref}
      id="blog"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className="px-6 py-24 md:px-12 bg-dark relative overflow-hidden"
    >
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-secondary/5 blur-[120px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeInUp} className="mb-16 text-center">
          <span className="inline-block px-6 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium mb-4">
            ARTICLES
          </span>
          <h2 className="text-4xl font-bold text-text md:text-5xl">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Posts</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-softGray">
            Thoughts on full-stack development, architecture patterns, and lessons learned building real-world applications.
          </p>
        </motion.div>

        <motion.div variants={stagger} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              className="group bg-card-glass border border-border backdrop-blur-md rounded-2xl overflow-hidden hover:border-primary/30 transition-all hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]"
            >
              <div className="relative h-44 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center backdrop-blur-sm">
                    <Tag size={28} className="text-primary" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-xs text-softGray">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    {post.readTime || "5 min read"}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-bold text-text leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="mb-4 text-sm text-softGray leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {(post.tags || []).map((tag, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={post.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors"
                >
                  Read Article <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Blog;
