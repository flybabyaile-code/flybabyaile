import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, TrendingUp, BarChart3, AlertCircle, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

// 数字计数器组件
function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count}</span>;
}

const glassCardStyle = {
  backdropFilter: 'blur(12px)',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(0, 217, 255, 0.2)',
  borderRadius: '0.75rem',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
};

const glassCardHoverStyle = {
  ...glassCardStyle,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* 导航栏 */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-cyan-500/10">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-cyan-400" />
            <span className="text-xl font-bold gradient-text" style={{ fontFamily: 'Sora, sans-serif' }}>ChainSecure</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm hover:text-cyan-400 transition-colors">服务项目</a>
            <a href="#stats" className="text-sm hover:text-cyan-400 transition-colors">系统状态</a>
            <a href="#cases" className="text-sm hover:text-cyan-400 transition-colors">成功案例</a>
            <a href="#partners" className="text-sm hover:text-cyan-400 transition-colors">合作伙伴</a>
          </div>
          <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-background font-semibold">
            开始追踪
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* 背景渐变球 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-900/10 to-cyan-500/10 rounded-full blur-3xl -z-10" />

        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 fade-in-up">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium">
                  🔐 资产安全守护者
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                <span className="block">链上资产</span>
                <span className="gradient-text block">安全追踪</span>
                <span className="block">快速恢复</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                专业链上安全解决方案，99.2% 成功率保障您的数字资产安全。实时追踪、快速恢复、24/7 全天候响应。
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-background font-semibold">
                  开始追踪 <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10">
                  联系我们
                </Button>
              </div>
            </div>

            {/* 右侧卡片堆叠 */}
            <div className="relative h-96 hidden md:block">
              <div
                className="absolute w-full h-64 p-6 rounded-2xl shadow-2xl transform transition-transform"
                style={{
                  ...glassCardStyle,
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-semibold" style={{ fontFamily: 'Sora, sans-serif' }}>Trace Engine</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">链上追踪</p>
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-medium">
                  ● Active
                </div>
              </div>
              <div
                className="absolute w-full h-64 p-6 rounded-2xl shadow-2xl transform transition-transform top-20 left-8"
                style={{
                  ...glassCardStyle,
                  transform: `translateY(${scrollY * 0.15}px)`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-semibold" style={{ fontFamily: 'Sora, sans-serif' }}>Recovery</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">资产救援</p>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium">
                  ● Processing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 统计数据 */}
      <section id="stats" className="py-16 border-y border-cyan-500/10">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: "成功率", value: 99.2, suffix: "%" },
              { label: "成功案例", value: 500, suffix: "+" },
              { label: "全天候响应", value: 24, suffix: "/7" },
              { label: "全球节点", value: 12, suffix: "" },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold gradient-text" style={{ fontFamily: 'Sora, sans-serif' }}>
                  <CountUp target={typeof stat.value === "number" ? Math.floor(stat.value) : 0} />
                  {stat.suffix}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务项目 */}
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>核心服务</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              我们提供全方位的链上安全解决方案，从追踪到恢复，一站式服务
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Trace Engine",
                subtitle: "链上追踪",
                status: "Active",
                desc: "实时追踪链上资产流向",
              },
              {
                icon: AlertCircle,
                title: "Exchange Risk Control",
                subtitle: "交易所风控解除",
                status: "Running",
                desc: "快速解除交易所风控限制",
              },
              {
                icon: TrendingUp,
                title: "Recovery",
                subtitle: "资产救援",
                status: "Processing",
                desc: "高效恢复被冻结资产",
              },
              {
                icon: BarChart3,
                title: "Data Scan",
                subtitle: "链上分析",
                status: "Online",
                desc: "深度链上数据分析",
              },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-xl group cursor-pointer transition-all duration-300 hover:translate-y-[-4px]"
                  style={{
                    ...glassCardHoverStyle,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.2)';
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
                      {service.status}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>{service.title}</h3>
                  <p className="text-sm text-cyan-400 mb-3">{service.subtitle}</p>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 系统状态 */}
      <section className="py-20 bg-gradient-to-b from-cyan-900/5 to-blue-900/5">
        <div className="container">
          <div className="p-8 rounded-2xl" style={glassCardStyle}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2" style={{ fontFamily: 'Sora, sans-serif' }}>
              <Shield className="w-5 h-5 text-cyan-400" />
              Security Control Center v2.6.1
            </h3>
            <div className="space-y-4 text-sm" style={{ fontFamily: 'Fira Code, monospace' }}>
              <div className="text-muted-foreground">
                <span className="text-cyan-400">root@chainsecure:~$</span> system status --full
              </div>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>System Status: <span className="text-cyan-300">Online</span> (All services running normally)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Security Monitoring: <span className="text-cyan-300">Enabled</span> (Real-time threat detection)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Node Network: <span className="text-cyan-300">Stable</span> (12 global nodes)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 成功案例 */}
      <section id="cases" className="py-20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>成功案例</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              我们已成功处理 500+ 区块链安全案件，成功率 99.2%
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                amount: "29,620,333.024481 USDT",
                block: "#67186987",
                date: "2024-11-22 01:40:06",
                title: "处理 2024 年末巨额 USDT 冻结事件",
              },
              {
                amount: "8,500,000 USDT",
                block: "#68949637",
                date: "2025-01-22 07:00:24",
                title: "快速解决 2025 年初 850 万 USDT 资产冻结",
              },
              {
                amount: "6,997,184.377651 USDT",
                block: "#23300471",
                date: "2020-09-15 22:27:06",
                title: "完成 2020 年早期 699 万 USDT 解冻",
              },
            ].map((caseItem, i) => (
              <div
                key={i}
                className="p-8 rounded-xl transition-all duration-300 hover:translate-y-[-4px]"
                style={{
                  ...glassCardHoverStyle,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(0, 217, 255, 0.2)';
                }}
              >
                <div className="grid md:grid-cols-4 gap-6 items-start">
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">涉及金额</p>
                    <p className="text-2xl font-bold gradient-text" style={{ fontFamily: 'Sora, sans-serif' }}>{caseItem.amount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">案发区块</p>
                    <p className="text-lg text-cyan-300" style={{ fontFamily: 'Fira Code, monospace' }}>{caseItem.block}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">案发时间</p>
                    <p className="text-sm text-muted-foreground">{caseItem.date}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-2">案件描述</p>
                    <p className="text-sm font-medium">{caseItem.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 合作伙伴 */}
      <section id="partners" className="py-20 bg-gradient-to-b from-cyan-900/5 to-blue-900/5">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>合作伙伴</h2>
            <p className="text-muted-foreground">与全球顶尖区块链安全机构建立战略合作</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "CertiK", desc: "全球领先的区块链安全审计公司" },
              { name: "Chainalysis", desc: "区块链数据分析与合规解决方案领导者" },
              { name: "SlowMist", desc: "亚洲顶尖的区块链安全公司" },
              { name: "TRM Labs", desc: "数字资产合规与风险监控平台" },
              { name: "Elliptic", desc: "加密货币合规与调查解决方案提供商" },
              { name: "CipherTrace", desc: "Mastercard 旗下加密货币合规公司" },
            ].map((partner, i) => (
              <div
                key={i}
                className="p-6 rounded-xl text-center transition-colors"
                style={{
                  ...glassCardStyle,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <h4 className="font-semibold text-lg mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>{partner.name}</h4>
                <p className="text-sm text-muted-foreground">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-cyan-500/10 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>ChainSecure</span>
              </div>
              <p className="text-sm text-muted-foreground">区块链安全与资产救援专家</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">服务</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">链上追踪</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">风控解除</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">资产救援</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">关于</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">关于我们</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">成功案例</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">合作伙伴</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">联系</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:flybabyaile@gmail.com" className="hover:text-cyan-400 transition-colors">flybabyaile@gmail.com</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">@masanduo1</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cyan-500/10 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 ChainSecure Tech. All rights reserved. | 24/7 全天候响应</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
