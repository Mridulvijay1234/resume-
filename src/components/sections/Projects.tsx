import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../../data/portfolioData';
import type { ProjectItem } from '../../types/portfolio';
import { 
  ExternalLink, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Sparkles, 
  GitBranch, 
  Search, 
  Check, 
  Copy,
  Layers,
  Code2,
  Calendar,
  Ticket
} from 'lucide-react';
import './Projects.css';

type FilterType = 'all' | 'web-platforms' | 'ai-systems' | 'cs-embedded' | 'ui-lab';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedRepo, setCopiedRepo] = useState<string | null>(null);

  // Jarvis HUD state
  const [activeHudTab, setActiveHudTab] = useState<'permission' | 'fts5' | 'telemetry'>('permission');

  // Menu Button interactive demo state
  const [menuButtonState, setMenuButtonState] = useState<'hamburger' | 'cross' | 'arrow'>('hamburger');

  // Event Oasis ticket selector state
  const [oasisTicketTier, setOasisTicketTier] = useState<'vip' | 'general' | 'early'>('vip');

  // CodeYart Ascend active route state
  const [ascendRoute, setAscendRoute] = useState<'dashboard' | 'clients' | 'analytics'>('dashboard');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesFilter = 
        activeFilter === 'all' || project.filterCategory === activeFilter;
      
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesFilter;

      const matchesSearch = 
        project.title.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const copyCloneCommand = (repoUrl?: string, repoName?: string) => {
    if (!repoUrl) return;
    const command = `git clone ${repoUrl}.git`;
    navigator.clipboard.writeText(command);
    setCopiedRepo(repoName || repoUrl);
    setTimeout(() => setCopiedRepo(null), 2500);
  };

  const renderProjectVisual = (project: ProjectItem) => {
    switch (project.id) {
      // 1. CodeYart Ascend Platform: Interactive Enterprise TanStack Dashboard
      case 'codeyart-ascend':
        return (
          <div className="project-interactive-hud visual-ascend" aria-label="CodeYart Ascend Platform Telemetry">
            <div className="hud-header">
              <div className="hud-title-wrap">
                <Code2 size={14} className="hud-pulse-icon" />
                <span className="hud-title">TANSTACK START // ASCEND ARCHITECTURE</span>
              </div>
              <div className="hud-status-badge">
                <span className="hud-status-dot" />
                <span>SSR · REACT 19</span>
              </div>
            </div>

            <div className="hud-tabs">
              <button
                type="button"
                className={`hud-tab-btn ${ascendRoute === 'dashboard' ? 'is-active' : ''}`}
                onClick={() => setAscendRoute('dashboard')}
              >
                /DASHBOARD
              </button>
              <button
                type="button"
                className={`hud-tab-btn ${ascendRoute === 'clients' ? 'is-active' : ''}`}
                onClick={() => setAscendRoute('clients')}
              >
                /CLIENT-PORTAL
              </button>
              <button
                type="button"
                className={`hud-tab-btn ${ascendRoute === 'analytics' ? 'is-active' : ''}`}
                onClick={() => setAscendRoute('analytics')}
              >
                /RECHARTS-METRICS
              </button>
            </div>

            <div className="hud-display-screen">
              {ascendRoute === 'dashboard' && (
                <div className="hud-tab-pane">
                  <div className="hud-row">
                    <span className="hud-key">ROUTER STACK:</span>
                    <span className="hud-val text-accent">@tanstack/react-router v1.168</span>
                  </div>
                  <div className="hud-row">
                    <span className="hud-key">TAILWIND:</span>
                    <span className="hud-val">v4.2.1 Native Engine</span>
                  </div>
                  <div className="hud-row">
                    <span className="hud-key">FRAME RATE:</span>
                    <span className="hud-val text-accent">60fps Lenis Synchronized</span>
                  </div>
                  <div className="ascend-mini-bars">
                    <div className="ascend-bar" style={{ height: '55%' }} />
                    <div className="ascend-bar" style={{ height: '80%' }} />
                    <div className="ascend-bar" style={{ height: '65%' }} />
                    <div className="ascend-bar" style={{ height: '95%' }} />
                    <div className="ascend-bar" style={{ height: '75%' }} />
                  </div>
                </div>
              )}

              {ascendRoute === 'clients' && (
                <div className="hud-tab-pane">
                  <div className="hud-row">
                    <span className="hud-key">UI SYSTEM:</span>
                    <span className="hud-val">Radix UI Primitives (Accessible)</span>
                  </div>
                  <div className="hud-row">
                    <span className="hud-key">VALIDATION:</span>
                    <span className="hud-val text-accent">Zod v3 Strict Form Schemas</span>
                  </div>
                  <div className="hud-code-snippet">
                    <code>const ClientSchema = z.object(&#123; enterpriseId: z.string().uuid() &#125;);</code>
                  </div>
                </div>
              )}

              {ascendRoute === 'analytics' && (
                <div className="hud-tab-pane">
                  <div className="hud-row">
                    <span className="hud-key">DATA VISUALS:</span>
                    <span className="hud-val">Recharts Dynamic Timeseries</span>
                  </div>
                  <div className="hud-row">
                    <span className="hud-key">QUERY CACHE:</span>
                    <span className="hud-val text-accent">Hydrated Server State</span>
                  </div>
                  <div className="hud-waveform">
                    <div className="wave-bar" style={{ animationDelay: '0.15s' }} />
                    <div className="wave-bar" style={{ animationDelay: '0.35s' }} />
                    <div className="wave-bar" style={{ animationDelay: '0.1s' }} />
                    <div className="wave-bar" style={{ animationDelay: '0.45s' }} />
                  </div>
                </div>
              )}
            </div>

            <div className="hud-footer">
              <span>CODYART SOFTWARE SOLUTIONS // ASCEND ENGINE</span>
              <span className="text-accent">VERIFIED 2026</span>
            </div>
          </div>
        );

      // 2. Event Oasis Platform: Interactive Ticketing & Seat Radar
      case 'event-oasis-platform':
        return (
          <div className="project-interactive-hud visual-oasis" aria-label="Event Oasis Platform Telemetry">
            <div className="hud-header">
              <div className="hud-title-wrap">
                <Ticket size={14} className="hud-pulse-icon" />
                <span className="hud-title">EVENT OASIS // RESERVATION ENGINE</span>
              </div>
              <div className="hud-status-badge">
                <span className="hud-status-dot" />
                <span>REAL-TIME BOOKING</span>
              </div>
            </div>

            <div className="oasis-ticket-selector">
              <button
                type="button"
                className={`ticket-tier-btn ${oasisTicketTier === 'vip' ? 'is-active' : ''}`}
                onClick={() => setOasisTicketTier('vip')}
              >
                VIP ACCESS (₹1,999)
              </button>
              <button
                type="button"
                className={`ticket-tier-btn ${oasisTicketTier === 'general' ? 'is-active' : ''}`}
                onClick={() => setOasisTicketTier('general')}
              >
                GENERAL ADMIT (₹799)
              </button>
              <button
                type="button"
                className={`ticket-tier-btn ${oasisTicketTier === 'early' ? 'is-active' : ''}`}
                onClick={() => setOasisTicketTier('early')}
              >
                EARLY BIRD (₹499)
              </button>
            </div>

            <div className="hud-display-screen">
              <div className="hud-tab-pane">
                <div className="hud-row">
                  <span className="hud-key">SELECTED TIER:</span>
                  <span className="hud-val text-accent uppercase font-mono">{oasisTicketTier} TIER</span>
                </div>
                <div className="hud-row">
                  <span className="hud-key">CAROUSEL ENGINE:</span>
                  <span className="hud-val">Embla Carousel React (Touch-native)</span>
                </div>
                <div className="hud-row">
                  <span className="hud-key">RESERVATION STATUS:</span>
                  <span className="hud-val text-accent">
                    {oasisTicketTier === 'vip' ? '92% Booked · 4 Seats Remain' : 'Available Instantly'}
                  </span>
                </div>
                <div className="oasis-radar-row">
                  <div className="radar-circle">
                    <span className="radar-blip" />
                  </div>
                  <span className="radar-label">Dynamic Venue Capacity: 1,200 / 1,500</span>
                </div>
              </div>
            </div>

            <div className="hud-footer">
              <span>TANSTACK START &amp; QUERY · EMBLA SHOWCASE</span>
              <Calendar size={13} />
            </div>
          </div>
        );

      // 3. Rakhi Bloom: Cinematic AI Visual Canvas
      case 'rakhi-bloom':
        return (
          <div className="project-visual-canvas visual-bloom">
            <div className="canvas-frame-header">
              <Sparkles size={13} className="text-accent" />
              <span className="frame-title">AI CINEMATIC VISUAL STORYTELLING // RAKHI BLOOM</span>
            </div>
            <div className="bloom-canvas-body">
              <div className="bloom-ambient-glow" />
              <div className="bloom-content-overlay">
                <span className="bloom-badge">FOREVER RAKHI BOND</span>
                <h4 className="bloom-title">Cinematic AI-Generated Visual Pipeline</h4>
                <p className="bloom-sub">Emotional visual narrative without stock photos or generic flat illustration</p>
                <div className="bloom-tags-strip">
                  <span className="bloom-tag">Audio-Reactive Mood</span>
                  <span className="bloom-tag">Custom Gifting Flow</span>
                  <span className="bloom-tag">Zero Layout Shift</span>
                </div>
              </div>
            </div>
          </div>
        );

      // 4. Menu-Button Interactive Creative Component
      case 'menu-button-component':
        return (
          <div className="project-interactive-hud visual-menu-button">
            <div className="hud-header">
              <div className="hud-title-wrap">
                <Layers size={14} className="hud-pulse-icon" />
                <span className="hud-title">LIVE COMPONENT SANDBOX // CLICK TO MORPH</span>
              </div>
              <div className="hud-status-badge">
                <span className="hud-status-dot" />
                <span>STATE: {menuButtonState.toUpperCase()}</span>
              </div>
            </div>

            <div className="menu-demo-stage">
              <p className="menu-demo-instruction">Click the morph button below to test micro-animations:</p>
              
              <button
                type="button"
                className={`interactive-morph-button state-${menuButtonState}`}
                onClick={() => {
                  setMenuButtonState(prev => 
                    prev === 'hamburger' ? 'cross' : prev === 'cross' ? 'arrow' : 'hamburger'
                  );
                }}
                aria-label="Toggle animated menu button"
              >
                <span className="morph-line line-1" />
                <span className="morph-line line-2" />
                <span className="morph-line line-3" />
              </button>

              <div className="morph-state-controls">
                <button
                  type="button"
                  className={`morph-chip ${menuButtonState === 'hamburger' ? 'is-active' : ''}`}
                  onClick={() => setMenuButtonState('hamburger')}
                >
                  HAMBURGER
                </button>
                <button
                  type="button"
                  className={`morph-chip ${menuButtonState === 'cross' ? 'is-active' : ''}`}
                  onClick={() => setMenuButtonState('cross')}
                >
                  CLOSE (X)
                </button>
                <button
                  type="button"
                  className={`morph-chip ${menuButtonState === 'arrow' ? 'is-active' : ''}`}
                  onClick={() => setMenuButtonState('arrow')}
                >
                  BACK ARROW
                </button>
              </div>
            </div>

            <div className="hud-footer">
              <span>HARDWARE ACCELERATED CSS3 KEYFRAMES</span>
              <span className="text-accent">ZERO RUNTIME OVERHEAD</span>
            </div>
          </div>
        );

      // 5. Anand ICE Algorithmic Lab
      case 'test-anand-engineering':
        return (
          <div className="project-visual-canvas visual-cgi">
            <div className="canvas-frame-header">
              <Terminal size={13} className="text-accent" />
              <span className="frame-title">ANAND ICE CSE LAB // GCC -Wall -O2 test_algo.c</span>
            </div>
            <div className="cgi-terminal-body">
              <p className="terminal-line"><span className="term-prompt">$</span> valgrind --leak-check=full ./algo_test</p>
              <p className="terminal-line text-accent"><span className="term-prompt">&gt;</span> ==28410== All heap blocks were freed -- no leaks are possible</p>
              <p className="terminal-line"><span className="term-prompt">&gt;</span> Binary Tree Traversal: O(log N) average depth confirmed</p>
              <p className="terminal-line"><span className="term-prompt">&gt;</span> Pointer Bounds Check: 0 segmentation faults across 10,000 runs</p>
            </div>
          </div>
        );

      // 6. Jarvis / Nexora AI OS
      case 'jarvis-nexora':
        return (
          <div className="project-interactive-hud" aria-label="Jarvis Nexora System Telemetry">
            <div className="hud-header">
              <div className="hud-title-wrap">
                <Sparkles size={14} className="hud-pulse-icon" />
                <span className="hud-title">NEXORA GOVERNED HUD // V3.2</span>
              </div>
              <div className="hud-status-badge">
                <span className="hud-status-dot" />
                <span>STATE: ACTIVE</span>
              </div>
            </div>

            <div className="hud-tabs">
              <button
                type="button"
                className={`hud-tab-btn ${activeHudTab === 'permission' ? 'is-active' : ''}`}
                onClick={() => setActiveHudTab('permission')}
              >
                PERMISSION ENGINE
              </button>
              <button
                type="button"
                className={`hud-tab-btn ${activeHudTab === 'fts5' ? 'is-active' : ''}`}
                onClick={() => setActiveHudTab('fts5')}
              >
                SQLITE FTS5 CONTEXT
              </button>
              <button
                type="button"
                className={`hud-tab-btn ${activeHudTab === 'telemetry' ? 'is-active' : ''}`}
                onClick={() => setActiveHudTab('telemetry')}
              >
                MODEL ROUTING
              </button>
            </div>

            <div className="hud-display-screen">
              {activeHudTab === 'permission' && (
                <div className="hud-tab-pane">
                  <div className="hud-row">
                    <span className="hud-key">GATEWAY:</span>
                    <span className="hud-val text-accent">Human-in-the-Loop Enforced</span>
                  </div>
                  <div className="hud-row">
                    <span className="hud-key">AUTONOMY TIER:</span>
                    <span className="hud-val">Tier 2 (Governed Execution)</span>
                  </div>
                  <div className="hud-row">
                    <span className="hud-key">DESKTOP HOOKS:</span>
                    <span className="hud-val">Scoped I/O &amp; Process Sandboxing</span>
                  </div>
                  <div className="hud-waveform">
                    <div className="wave-bar" style={{ animationDelay: '0.1s' }} />
                    <div className="wave-bar" style={{ animationDelay: '0.3s' }} />
                    <div className="wave-bar" style={{ animationDelay: '0.5s' }} />
                    <div className="wave-bar" style={{ animationDelay: '0.2s' }} />
                    <div className="wave-bar" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}

              {activeHudTab === 'fts5' && (
                <div className="hud-tab-pane">
                  <div className="hud-row">
                    <span className="hud-key">STORAGE ENGINE:</span>
                    <span className="hud-val">Local SQLite + FTS5 Tokenizer</span>
                  </div>
                  <div className="hud-row">
                    <span className="hud-key">INDEX SEARCH:</span>
                    <span className="hud-val text-accent">Sub-5ms Full-Text Recall</span>
                  </div>
                  <div className="hud-code-snippet">
                    <code>SELECT rank, doc_body FROM context_idx WHERE context_idx MATCH 'system_query';</code>
                  </div>
                </div>
              )}

              {activeHudTab === 'telemetry' && (
                <div className="hud-tab-pane">
                  <div className="hud-row">
                    <span className="hud-key">ROUTER DISPATCH:</span>
                    <span className="hud-val">Cost &amp; Latency Aware</span>
                  </div>
                  <div className="hud-row">
                    <span className="hud-key">LOCAL COLD TIER:</span>
                    <span className="hud-val text-accent">Small parameter offline fallback</span>
                  </div>
                  <div className="hud-row">
                    <span className="hud-key">DEEP REASONING:</span>
                    <span className="hud-val">Cloud API on complex context tasks</span>
                  </div>
                </div>
              )}
            </div>

            <div className="hud-footer">
              <span>LOCAL PRIVACY ENGINE · ZERO RAW LOG LEAKAGE</span>
              <ShieldCheck size={14} />
            </div>
          </div>
        );

      // 7. Clear Kun
      case 'clear-kun':
        return (
          <div className="project-visual-canvas visual-clearkun">
            <div className="canvas-frame-header">
              <span className="frame-dot" />
              <span className="frame-dot" />
              <span className="frame-dot" />
              <span className="frame-title">clearkun.production // viewport &amp; seo engine</span>
            </div>
            <div className="clearkun-preview-body">
              <div className="clearkun-wire-hero">
                <span className="wire-label">RESPONSIVE WEB PLATFORM</span>
                <div className="wire-headline" />
                <div className="wire-subtext" />
              </div>
              <div className="clearkun-telemetry-grid">
                <div className="telemetry-box">
                  <span className="telemetry-label">ARCHITECTURE</span>
                  <span className="telemetry-val">Modular React</span>
                </div>
                <div className="telemetry-box">
                  <span className="telemetry-label">SEO FOUNDATION</span>
                  <span className="telemetry-val">Structured JSON-LD</span>
                </div>
                <div className="telemetry-box">
                  <span className="telemetry-label">UX FLOW</span>
                  <span className="telemetry-val">Fluid Breakpoints</span>
                </div>
              </div>
            </div>
          </div>
        );

      // 8. CGI Web System
      case 'cgi-web-system':
        return (
          <div className="project-visual-canvas visual-cgi">
            <div className="canvas-frame-header">
              <Terminal size={13} className="text-accent" />
              <span className="frame-title">/usr/lib/cgi-bin/gateway.cgi — Apache2 / Linux</span>
            </div>
            <div className="cgi-terminal-body">
              <p className="terminal-line"><span className="term-prompt">$</span> gcc -O3 -Wall cgi_engine.c -o gateway.cgi</p>
              <p className="terminal-line"><span className="term-prompt">&gt;</span> Standard Input stream parsed successfully</p>
              <p className="terminal-line"><span className="term-prompt">&gt;</span> Content-Type: text/html; charset=utf-8</p>
              <p className="terminal-line text-accent"><span className="term-prompt">&gt;</span> Low-overhead process execution completed.</p>
            </div>
          </div>
        );

      // 9. Robot-Control Car
      case 'robot-control-car':
        return (
          <div className="project-visual-canvas visual-robot">
            <div className="canvas-frame-header">
              <Cpu size={13} className="text-accent" />
              <span className="frame-title">EMBEDDED HARDWARE TELEMETRY // ARDUINO &amp; PI</span>
            </div>
            <div className="robot-sensor-body">
              <div className="sensor-matrix">
                <div className="sensor-cell">
                  <span className="sensor-name">ULTRASONIC (HC-SR04)</span>
                  <span className="sensor-status text-accent">Active Ranging</span>
                </div>
                <div className="sensor-cell">
                  <span className="sensor-name">IR PROXIMITY ARRAY</span>
                  <span className="sensor-status text-accent">Edge Boundary Check</span>
                </div>
                <div className="sensor-cell">
                  <span className="sensor-name">PWM MOTOR DRIVE</span>
                  <span className="sensor-status">Differential Throttle</span>
                </div>
              </div>
              <div className="obstacle-radar-arc">
                <div className="radar-sweep" />
              </div>
            </div>
          </div>
        );

      // 10. Student Information System
      case 'student-information-system':
        return (
          <div className="project-visual-canvas visual-student">
            <div className="canvas-frame-header">
              <Database size={13} className="text-accent" />
              <span className="frame-title">C/C++ DATA STRUCTURES &amp; LINKED MEMORY ENGINE</span>
            </div>
            <div className="student-nodes-body">
              <div className="memory-node-chain">
                <div className="memory-node">
                  <span className="node-head">Node[0x1A40]</span>
                  <span className="node-data">StudentRecord</span>
                  <span className="node-pointer text-accent">-&gt; next</span>
                </div>
                <div className="node-arrow">&rarr;</div>
                <div className="memory-node">
                  <span className="node-head">Node[0x1A60]</span>
                  <span className="node-data">CourseList</span>
                  <span className="node-pointer text-accent">-&gt; next</span>
                </div>
                <div className="node-arrow">&rarr;</div>
                <div className="memory-node">
                  <span className="node-head">Node[0x1A80]</span>
                  <span className="node-data">GradeMatrix</span>
                  <span className="node-pointer">NULL</span>
                </div>
              </div>
              <p className="student-subtext">File Handling &amp; Strict Defensive Error Validation</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="editorial-section projects-section" aria-label="Selected Projects">
      <div className="editorial-container">
        {/* Section Heading & GitHub Profile Banner */}
        <div className="projects-header-block">
          <div className="projects-header-top">
            <span className="section-meta-label">02 / GITHUB &amp; SELECTED WORK</span>
            <a
              href="https://github.com/Mridulvijay1234"
              target="_blank"
              rel="noopener noreferrer"
              className="github-profile-pill"
            >
              <GitBranch size={13} className="text-accent" />
              <span>@Mridulvijay1234</span>
              <span className="repo-count-pill">{PROJECTS.length} REPOSITORIES</span>
              <ExternalLink size={12} />
            </a>
          </div>

          <h2 className="editorial-heading-lg">
            ENGINEERED<br />PROJECTS.
          </h2>

          <p className="projects-subtitle">
            A curated portfolio index spanning enterprise web systems, AI visual workflows, low-level systems and interactive UI experiments.
          </p>
        </div>

        {/* Innovative Interactive Filter & Search Terminal Bar */}
        <div className="projects-control-bar border-subtle-box">
          <div className="filter-chips-cluster">
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              ALL ({PROJECTS.length})
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'web-platforms' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('web-platforms')}
            >
              WEB PLATFORMS (3)
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'ai-systems' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('ai-systems')}
            >
              AI &amp; INTELLIGENCE (2)
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'cs-embedded' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('cs-embedded')}
            >
              CS &amp; SYSTEMS (4)
            </button>
            <button
              type="button"
              className={`filter-btn ${activeFilter === 'ui-lab' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('ui-lab')}
            >
              UI LAB (1)
            </button>
          </div>

          <div className="search-filter-box">
            <Search size={14} className="search-icon" />
            <input
              type="text"
              placeholder="Filter by tech (e.g. React 19, TanStack, C++, AI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Filter projects by technology or keyword"
            />
            {searchQuery && (
              <button 
                type="button" 
                onClick={() => setSearchQuery('')} 
                className="clear-search-btn"
                aria-label="Clear filter"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter if Filtered */}
        {(activeFilter !== 'all' || searchQuery) && (
          <div className="filter-results-status">
            <span>SHOWING {filteredProjects.length} OF {PROJECTS.length} PROJECTS</span>
            {searchQuery && <span className="query-tag">FOR "{searchQuery}"</span>}
          </div>
        )}

        {/* Editorial Projects Layout */}
        <div className="projects-stack">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="project-editorial-card border-subtle-box"
            >
              <div className="project-card-grid">
                {/* Information Column */}
                <div className="project-info-column">
                  <div className="project-meta-top">
                    <span className="project-number">{project.number}</span>
                    <span className="project-category">{project.category}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>

                  <p className="project-description">{project.description}</p>

                  {project.technicalDetails && (
                    <div className="project-tech-highlights">
                      <span className="tech-highlights-label">TECHNICAL SPECIFICATIONS:</span>
                      <ul className="tech-highlights-list">
                        {project.technicalDetails.map((detail, idx) => (
                          <li key={idx} className="tech-detail-item">
                            <span className="detail-dash">—</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="project-tags-wrap">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-card-actions">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-action-link"
                        data-interactive="true"
                      >
                        <GitBranch size={13} />
                        <span>EXPLORE ON GITHUB</span>
                        <ExternalLink size={13} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <button
                        type="button"
                        onClick={() => copyCloneCommand(project.githubUrl, project.repoName)}
                        className="project-clone-btn"
                        title={`Copy: git clone ${project.githubUrl}.git`}
                        aria-label={`Copy git clone command for ${project.title}`}
                      >
                        {copiedRepo === (project.repoName || project.githubUrl) ? (
                          <>
                            <Check size={13} className="text-accent" />
                            <span className="text-accent">COPIED CLONE CMD</span>
                          </>
                        ) : (
                          <>
                            <Copy size={13} />
                            <span>COPY CLONE</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Visual / Interactive Telemetry Column */}
                <div className="project-visual-column">
                  {renderProjectVisual(project)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
