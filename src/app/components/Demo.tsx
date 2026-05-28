import { useState } from "react";

export default function Demo() {
  const [formData, setFormData] = useState({
    name: "",
    boutiqueName: "",
    email: "",
    websiteOrInstagram: "",
    posProvider: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const payload = {
      name: formData.name,
      boutique_name: formData.boutiqueName,
      email: formData.email,
      website_or_instagram: formData.websiteOrInstagram,
      pos_platform: formData.posProvider,
      message: formData.message,
      _subject: "New MaisonMatch Demo Request",
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/karim@maisonmatch.ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      setFormData({
        name: "",
        boutiqueName: "",
        email: "",
        websiteOrInstagram: "",
        posProvider: "",
        message: "",
      });
    } catch (error) {
      console.error("Demo request error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="demo" className="py-32 bg-card border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Request a Demo
          </p>
          <h2 className="text-[40px] md:text-[52px] leading-[1.1] tracking-tight mb-6">
            See MaisonMatch in action
          </h2>
          <p className="text-[15px] leading-relaxed text-foreground/70">
            Built for boutiques. No setup fee for pilot partners.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[13px] tracking-wide block">
                Your Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] tracking-wide block">
                Boutique Name
              </label>
              <input
                type="text"
                required
                value={formData.boutiqueName}
                onChange={(e) =>
                  setFormData({ ...formData, boutiqueName: e.target.value })
                }
                className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[13px] tracking-wide block">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[13px] tracking-wide block">
                Website or Instagram
              </label>
              <input
                type="text"
                value={formData.websiteOrInstagram}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    websiteOrInstagram: e.target.value,
                  })
                }
                className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:border-accent transition-colors"
                placeholder="@yourboutique"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] tracking-wide block">
                POS Platform
              </label>
              <select
                value={formData.posProvider}
                onChange={(e) =>
                  setFormData({ ...formData, posProvider: e.target.value })
                }
                className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:border-accent transition-colors"
              >
                <option value="">Select one</option>
                <option value="Shopify">Shopify</option>
                <option value="Square">Square</option>
                <option value="Lightspeed">Lightspeed</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[13px] tracking-wide block">
              Message Optional
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-3 bg-input-background border border-border focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Tell us about your boutique..."
            />
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-[13px] tracking-wide"
            >
              {status === "sending" ? "Sending..." : "Request a Demo"}
            </button>

            {status === "success" && (
              <p className="text-[13px] text-foreground/70">
                Thank you. We’ll be in touch soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-[13px] text-foreground/70">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}