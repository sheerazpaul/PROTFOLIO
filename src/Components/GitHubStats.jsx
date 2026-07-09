import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Star, GitFork, Users, Code2, ExternalLink, BookOpen, GitCommit } from "lucide-react";

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/sheerazpaul"),
          fetch("https://api.github.com/users/sheerazpaul/repos?per_page=100&sort=updated"),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("Fetch failed");
        const [userData, reposData] = await Promise.all([userRes.json(), reposRes.json()]);
        setStats(userData);
        setRepos(reposData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchGitHub();
  }, []);

  const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);
  const totalForks = repos.reduce((acc, r) => acc + r.forks_count, 0);

  const langMap = {};
  repos.filter((r) => r.language).forEach((r) => {
    langMap[r.language] = (langMap[r.language] || 0) + 1;
  });
  const topLangs = Object.entries(langMap).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const maxLang = topLangs.length ? topLangs[0][1] : 1;

  const topRepos = repos.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4);

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const statCards = [
    { icon: BookOpen, label: "Public Repos", value: stats?.public_repos ?? 0 },
    { icon: Users, label: "Followers", value: stats?.followers ?? 0 },
    { icon: Star, label: "Total Stars", value: totalStars },
    { icon: GitFork, label: "Total Forks", value: totalForks },
  ];

  return (
    <motion.section
      ref={ref}
      id="github"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className="px-6 py-24 md:px-12 bg-dark relative overflow-hidden"
    >
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl">
        <motion.div variants={fadeInUp} className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium mb-4">
            <Github size={16} /> GITHUB
          </span>
          <h2 className="text-4xl font-bold text-text md:text-5xl">
            Open Source <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Activity</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-softGray">
            Real-time stats fetched directly from the GitHub API — repositories, contributions, and technologies I work with.
          </p>
        </motion.div>

        {error ? (
          <div className="p-8 text-center bg-card-glass border border-border backdrop-blur-md rounded-2xl">
            <p className="text-softGray">Unable to fetch GitHub data at the moment. Check back later.</p>
          </div>
        ) : loading ? (
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-6 mb-16 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p-6 bg-card-glass border border-border backdrop-blur-md rounded-2xl animate-pulse">
                <div className="w-10 h-10 mb-4 rounded-xl bg-primary/10" />
                <div className="w-16 h-6 mb-2 rounded bg-primary/10" />
                <div className="w-12 h-4 rounded bg-primary/5" />
              </div>
            ))}
          </motion.div>
        ) : (
          <>
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 mb-16 md:grid-cols-4 md:gap-6">
              {statCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="p-6 bg-card-glass border border-border backdrop-blur-md rounded-2xl text-center hover:border-primary/30 transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <p className="text-3xl font-bold text-text md:text-4xl">{card.value}</p>
                    <p className="mt-1 text-sm text-softGray">{card.label}</p>
                  </div>
                );
              })}
            </motion.div>

            {topLangs.length > 0 && (
              <motion.div variants={fadeInUp} className="p-8 mb-16 bg-card-glass border border-border backdrop-blur-md rounded-2xl">
                <h3 className="flex items-center gap-2 mb-6 text-xl font-bold text-text">
                  <Code2 size={20} className="text-primary" /> Top Languages
                </h3>
                <div className="space-y-3">
                  {topLangs.map(([lang, count]) => {
                    const pct = Math.round((count / maxLang) * 100);
                    return (
                      <div key={lang}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-text">{lang}</span>
                          <span className="text-xs text-softGray">{count} repos</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-dark/50 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {topRepos.length > 0 && (
              <motion.div variants={fadeInUp}>
                <h3 className="flex items-center gap-2 mb-6 text-xl font-bold text-text">
                  <GitCommit size={20} className="text-primary" /> Top Repositories
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {topRepos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-5 bg-card-glass border border-border backdrop-blur-md rounded-2xl hover:border-primary/30 transition-all group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-text group-hover:text-primary transition-colors truncate">
                          {repo.name}
                        </h4>
                        <ExternalLink size={14} className="text-softGray shrink-0 mt-1" />
                      </div>
                      <p className="mb-3 text-sm text-softGray line-clamp-2">
                        {repo.description || "No description provided."}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-softGray">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Star size={12} /> {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork size={12} /> {repo.forks_count}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div variants={fadeInUp} className="mt-12 text-center">
              <a
                href={`https://github.com/${stats?.login || "sheerazpaul"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold tracking-wide hover:opacity-90 transition-all shadow-[0_0_20px_rgba(20,184,166,0.4)] transform hover:-translate-y-1 inline-flex items-center gap-2">
                  <Github size={18} /> View Full GitHub Profile
                </button>
              </a>
            </motion.div>
          </>
        )}
      </div>
    </motion.section>
  );
};

export default GitHubStats;
