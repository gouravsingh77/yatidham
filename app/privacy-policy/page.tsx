import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/himalayas.jpg"
          alt="Privacy Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* 📄 CONTENT */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Intro */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground">
                At <strong>Yati Dham</strong>, we are committed to protecting your privacy and ensuring transparency in how your information is handled. 
                This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
              </p>
              <p className="text-muted-foreground">
                By using our website, you agree to the practices described in this policy.
              </p>
            </CardContent>
          </Card>

          {/* Information Collection */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Information We Collect</h2>

              <p className="text-muted-foreground">
                We may collect both personal and non-personal information when you interact with our platform:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and address</li>
                <li><strong>Booking Information:</strong> Travel preferences, itinerary details, and requirements</li>
                <li><strong>Payment Information:</strong> Processed securely through third-party payment gateways</li>
                <li><strong>Health Information:</strong> Relevant medical details required for trekking safety</li>
                <li><strong>Technical Data:</strong> IP address, browser type, and device information</li>
              </ul>
            </CardContent>
          </Card>

          {/* Usage */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">How We Use Your Information</h2>

              <p className="text-muted-foreground">
                The information we collect is used to enhance your experience and deliver our services effectively:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To process bookings, payments, and confirmations</li>
                <li>To communicate regarding your trips, inquiries, or updates</li>
                <li>To personalize your experience and improve our services</li>
                <li>To send promotional offers (only if you opt-in)</li>
                <li>To comply with legal obligations and safety requirements</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">Cookies & Tracking Technologies</h2>

              <p className="text-muted-foreground">
                We use cookies and similar technologies to analyze website traffic and improve functionality.
              </p>

              <p className="text-muted-foreground">
                Cookies help us understand user behavior, remember preferences, and enhance overall user experience. 
                You can disable cookies through your browser settings at any time.
              </p>
            </CardContent>
          </Card>

          {/* Third Party */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">Third-Party Disclosure</h2>

              <p className="text-muted-foreground">
                We do not sell or trade your personal information. However, we may share it with trusted partners:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Service providers (payment processors, hosting services)</li>
                <li>Travel partners (guides, hotels, transport providers)</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </CardContent>
          </Card>

          {/* Security */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">Data Security</h2>

              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, misuse, or loss.
              </p>

              <p className="text-muted-foreground">
                While we strive to use commercially acceptable means to protect your information, no method of transmission over the internet is completely secure.
              </p>
            </CardContent>
          </Card>

          {/* Rights */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">Your Rights</h2>

              <p className="text-muted-foreground">
                Depending on your location, you may have the following rights:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access the personal data we hold about you</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent at any time</li>
                <li>Lodge complaints with a data protection authority</li>
              </ul>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">Changes to This Policy</h2>

              <p className="text-muted-foreground">
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <h2 className="text-2xl font-semibold">Contact Us</h2>

              <p className="text-muted-foreground">
                If you have any questions regarding this Privacy Policy, feel free to contact us:
              </p>

              <Link
                href="mailto:yatidham1008@gmail.com"
                className="block text-primary font-medium hover:underline"
              >
                📧 yatidham1008@gmail.com
              </Link>

              <Link
                href="tel:+919259071008"
                className="block text-primary font-medium hover:underline"
              >
                📞 +91 9259071008
              </Link>
            </CardContent>
          </Card>

          {/* Footer */}
          <p className="text-center text-sm text-muted-foreground">
            Last Updated: April 7, 2026
          </p>

        </div>
      </section>
    </div>
  )
}