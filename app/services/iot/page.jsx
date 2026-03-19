"use client";
import Link from 'next/link';
import ImagePlaceholder from "@/app/component/ImagePlaceholder";

const capabilities = [
  { title: "Embedded Firmware",        desc: "Custom firmware for microcontrollers (STM32, ESP32, Arduino) and single-board computers." },
  { title: "Sensor Integration",       desc: "Temperature, pressure, flow, vibration, level — selecting and integrating the right sensors for your process." },
  { title: "Industrial Protocols",     desc: "MQTT, Modbus RTU/TCP, OPC-UA, DNP3, BACnet — bridging field devices to modern networks." },
  { title: "Edge Computing",           desc: "Local data processing on edge devices to reduce latency, bandwidth, and cloud dependency." },
  { title: "Cloud Integration",        desc: "AWS IoT, Azure IoT Hub, Google Cloud IoT — connecting your assets to scalable cloud platforms." },
  { title: "IoT Dashboards",           desc: "Real-time visualisation dashboards with live data, trend charts, and alert management." },
  { title: "Predictive Maintenance",   desc: "ML-assisted anomaly detection on sensor data to predict failures before they cause downtime." },
  { title: "Security Hardening",       desc: "End-to-end encryption, certificate management, and secure OTA updates for industrial IoT." },
];

const techStack = [
  { layer: "Devices",       items: ["ESP32", "STM32", "Raspberry Pi", "Jetson Nano", "Arduino"] },
  { layer: "Protocols",     items: ["MQTT", "Modbus TCP", "OPC-UA", "CoAP", "BACnet", "DNP3"] },
  { layer: "Edge",          items: ["Node-RED", "Eclipse Mosquitto", "Grafana", "InfluxDB"] },
  { layer: "Cloud",         items: ["AWS IoT Core", "Azure IoT Hub", "ThingsBoard", "Losant"] },
  { layer: "Connectivity",  items: ["4G/LTE", "Wi-Fi 6", "LoRaWAN", "NB-IoT", "Zigbee", "RS-485"] },
];

const useCases = [
  {
    title: "Remote Asset Monitoring",
    desc: "Monitor pumps, motors, valves, and utilities from anywhere. Receive alerts when parameters drift out of bounds.",
  },
  {
    title: "Smart Agriculture",
    desc: "Soil moisture, weather station, and water flow monitoring for precision irrigation and crop management.",
  },
  {
    title: "Energy Management",
    desc: "Sub-meter monitoring across a facility to identify waste, enforce budgets, and verify savings.",
  },
  {
    title: "Cold Chain Tracking",
    desc: "Temperature and humidity monitoring across warehouses, transport, and last-mile delivery.",
  },
  {
    title: "Industrial Equipment Health",
    desc: "Vibration and thermal monitoring on rotating machinery for early fault detection and condition-based maintenance.",
  },
  {
    title: "Utility Telemetry",
    desc: "RTU-based telemetry for water treatment plants, substations, and gas distribution networks.",
  },
];

export default function IoTPage() {
  return (
    <div className="pt-16 bg-cloud">

      {/* Hero */}
      <section className="relative bg-white overflow-hidden border-b border-sky/15">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-gradient-to-bl from-sky/15 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="container-xl relative py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="section-label">IoT Development</div>
                <span className="tag-blue">Connected Systems</span>
              </div>
              <h1 className="section-heading-modern mb-6 text-balance">
                Industrial Internet of Things Engineering
              </h1>
              <p className="section-copy-muted text-base sm:text-lg max-w-xl mb-8">
                Connect every sensor, machine, and system in your facility to a unified data layer — enabling real-time visibility, analytics, and automated response.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/components/contect" className="btn-primary">Start Your Project</Link>
                <Link href="/services" className="btn-secondary">All Services</Link>
              </div>
            </div>
            <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden ring-1 ring-slate-300/40 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.4)]">
              <ImagePlaceholder
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                alt="IoT circuit board and connected sensors"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="badge-sky">IoT Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="container-xl">
          <div className="section-label mb-8">
            <span className="section-number">01</span> Capabilities
          </div>
          <h2 className="section-heading-modern mb-12">Full-Stack IoT Engineering</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((c, i) => (
              <div key={c.title} className="modern-panel card-hover-lift card group">
                <div className="w-8 h-8 rounded-lg bg-steel/10 flex items-center justify-center mb-4">
                  <span className="font-mono text-xs text-steel/60">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-semibold text-ink text-sm mb-2 group-hover:text-cerulean transition-colors">{c.title}</h3>
                <p className="text-xs text-ink/50 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label mb-6">
                <span className="section-number">02</span> Technology
              </div>
              <h2 className="section-heading-modern mb-5">
                Our IoT Technology Stack
              </h2>
              <p className="section-copy-muted mb-4">
                We choose technologies based on your reliability, security, and scalability requirements — not vendor preference. Open standards and proven platforms always.
              </p>
              <p className="section-copy-muted">
                Every solution is architected for long-term maintainability, with documented APIs and no lock-in.
              </p>
            </div>

            <div className="space-y-3">
              {techStack.map((row) => (
                <div key={row.layer} className="modern-panel card-hover-lift group card flex flex-col sm:flex-row sm:items-start gap-4 hover:border-cerulean/35">
                  <div className="sm:w-28 flex-shrink-0">
                    <p className="font-mono text-[10px] text-sky/55 uppercase tracking-widest">{row.layer}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {row.items.map(item => <span key={item} className="tag-light">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section bg-cloud">
        <div className="container-xl">
          <div className="section-label mb-8">
            <span className="section-number">03</span> Use Cases
          </div>
          <h2 className="section-heading-modern mb-12">Where We Deploy</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((uc) => (
              <div key={uc.title} className="modern-panel card-hover-lift card border-l-4 border-sky hover:border-cerulean transition-colors">
                <h3 className="font-semibold text-ink mb-3">{uc.title}</h3>
                <p className="text-sm text-ink/55 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture diagram (text-based) */}
      <section className="section bg-white">
        <div className="container-xl max-w-4xl">
          <div className="section-label mb-8">
            <span className="section-number">04</span> Architecture
          </div>
          <h2 className="section-heading-modern mb-10">A Layered IoT Architecture</h2>
          <div className="space-y-4">
            {[
              { layer: "Field Layer",  desc: "Physical sensors, actuators, meters, and PLCs gathering raw process data.", color: "forest" },
              { layer: "Edge Layer",   desc: "Local gateways and edge devices pre-processing data, running local logic and buffering.", color: "cerulean" },
              { layer: "Network",      desc: "Secure, encrypted data transmission via MQTT, OPC-UA, or HTTPS to cloud endpoints.", color: "steel" },
              { layer: "Cloud / Platform", desc: "Time-series databases, analytics, rule engines, and REST APIs for system integration.", color: "sky" },
              { layer: "Presentation", desc: "Web and mobile dashboards providing real-time visibility and historical reporting.", color: "cerulean" },
            ].map((item, i) => (
              <div key={item.layer} className="modern-panel card-hover-lift card flex items-center gap-5">
                <div className="flex-shrink-0 w-8 text-center">
                  <span className="font-mono text-lg font-light text-sky/40">{i + 1}</span>
                </div>
                <div className="flex-shrink-0 w-32">
                  <span className="font-semibold text-sm text-ink">{item.layer}</span>
                </div>
                <div className="h-px flex-grow bg-sky/20" />
                <div className="flex-grow-[2] max-w-sm">
                  <p className="text-sm text-ink/55">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LoRaWAN */}
      <section className="section bg-cloud">
        <div className="container-xl">
          <div className="section-label mb-8">
            <span className="section-number">05</span> LoRaWAN
          </div>
          <h2 className="section-heading-modern mb-6">LoRaWAN & LoRa Controls</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="section-copy-muted mb-4">
                LoRaWAN enables long-range, low-power wireless communication for IoT deployments across large areas — farms, campuses, and remote infrastructure — where Wi-Fi and cellular are impractical or expensive.
              </p>
              <p className="section-copy-muted">
                We design end-to-end LoRaWAN networks: custom LoRa end-node firmware, gateway selection, network server configuration (ChirpStack / TTN), and integration with your cloud platform or SCADA.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Range",        value: "2–15 km" },
                { label: "Battery Life", value: "5–10 years" },
                { label: "Network",      value: "ChirpStack / TTN" },
                { label: "Frequency",    value: "865–867 MHz (IN)" },
              ].map((spec) => (
                <div key={spec.label} className="card text-center">
                  <p className="font-display text-2xl font-semibold text-cerulean mb-1">{spec.value}</p>
                  <p className="text-xs text-ink/50">{spec.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom IoT */}
      <section className="section bg-white">
        <div className="container-xl">
          <div className="section-label mb-8">
            <span className="section-number">06</span> Custom Solutions
          </div>
          <h2 className="section-heading-modern mb-12">Bespoke IoT Hardware</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Custom PCB Design",        desc: "Purpose-built sensor boards and controller PCBs designed around your specific use case." },
              { title: "Enclosure & IP Rating",    desc: "Industrial enclosure design for field deployment — IP65/IP67 rated for harsh environments." },
              { title: "Firmware Development",     desc: "FreeRTOS and bare-metal firmware for STM32, ESP32, and custom microcontroller platforms." },
              { title: "Field Network Design",     desc: "RS-485, CAN bus, and LoRa mesh network design for multi-node field installations." },
              { title: "Cloud & API Integration",  desc: "Custom API connectors and device provisioning for AWS IoT, Azure, and self-hosted platforms." },
              { title: "Prototyping to Production",desc: "From proof-of-concept to small-batch production runs — handled entirely in-house." },
            ].map((item, i) => (
              <div key={item.title} className="modern-panel card-hover-lift group card">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-2xl font-light text-sky/35 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-semibold text-ink text-base mb-2 group-hover:text-cerulean transition-colors">{item.title}</h3>
                    <p className="text-sm text-ink/55 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cerulean relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
        <div className="container-xl relative flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h2 className="font-display text-4xl font-semibold mb-4">
              Connect your industrial assets today
            </h2>
            <p className="text-white/70 text-lg">
              Tell us what you need to monitor or control, and we&apos;ll design an IoT solution that fits your budget and timeline.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/components/contect" className="btn-white whitespace-nowrap">Get Started</Link>
            <Link href="/services/plc"       className="btn-outline-white whitespace-nowrap">PLC Services</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
