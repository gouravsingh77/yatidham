import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-[40vh] w-full">
        <Image
          src="/himalayas.jpg"
          alt="Terms Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-200 max-w-2xl">
            Please read these terms carefully before booking your adventure with us.
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
                Welcome to <strong>Yati Dham</strong>. By accessing our website, booking any trek, or using our services, 
                you agree to comply with and be bound by the following Terms of Service.
              </p>
              <p className="text-muted-foreground">
                These terms ensure a safe, transparent, and professional experience for all our travelers.
              </p>
            </CardContent>
          </Card>

          {/* Acceptance */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By using our services, you confirm that you have read, understood, and agreed to these terms. 
                If you do not agree, please do not use our website or services.
              </p>
            </CardContent>
          </Card>

          {/* Booking */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">2. Booking & Payments</h2>

              <p className="text-muted-foreground">
                To confirm a booking, accurate personal details and payment are required.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>30% non-refundable deposit required to secure booking</li>
                <li>Full payment must be completed 45 days before departure</li>
                <li>Bookings within 45 days require full payment</li>
                <li>Payments are processed via secure third-party gateways</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cancellation */}
          <Card>
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">3. Cancellation & Refund Policy</h2>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>45+ days before departure: Deposit loss</li>
                <li>30–45 days: 50% charge</li>
                <li>15–29 days: 75% charge</li>
                <li>Less than 15 days / No-show: 100% charge</li>
              </ul>

              <p className="text-muted-foreground">
                Cancellation requests must be submitted via email:
              </p>

              <Link href="mailto:yatidham1008@gmail.com" className="text-primary hover:underline">
                📧 yatidham1008@gmail.com
              </Link>
            </CardContent>
          </Card>

          {/* Changes */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">4. Booking Modifications</h2>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>45+ days before trip: ₹2,000 per person fee</li>
                <li>Within 45 days: Treated as cancellation + rebooking</li>
              </ul>
            </CardContent>
          </Card>

          {/* Company Rights */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">5. Our Rights & Responsibilities</h2>

              <p className="text-muted-foreground">
                We may modify itineraries due to weather, safety concerns, or unforeseen conditions.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Alternative arrangements will be provided where possible</li>
                <li>Customers can accept, change, or cancel with refund (if major change)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Health */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">6. Health & Fitness</h2>

              <p className="text-muted-foreground">
                Himalayan travel requires physical fitness. You must disclose:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Medical conditions</li>
                <li>Physical limitations</li>
                <li>Past injuries</li>
              </ul>

              <p className="text-muted-foreground">
                We reserve the right to deny participation if safety is at risk.
              </p>
            </CardContent>
          </Card>

          {/* Insurance */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">7. Travel Insurance</h2>

              <p className="text-muted-foreground">
                Travel insurance is highly recommended and should cover:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Trekking & adventure activities</li>
                <li>Medical emergencies</li>
                <li>Evacuation & cancellations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Liability */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">8. Liability Disclaimer</h2>

              <p className="text-muted-foreground">
                Adventure travel involves risks. We are not liable for:
              </p>

              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Natural disasters (landslides, weather)</li>
                <li>Government restrictions</li>
                <li>Third-party failures</li>
                <li>Personal negligence</li>
              </ul>
            </CardContent>
          </Card>

          {/* IP */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">9. Intellectual Property</h2>

              <p className="text-muted-foreground">
                All website content (images, text, branding) belongs to Yati Dham and cannot be copied without permission.
              </p>
            </CardContent>
          </Card>

          {/* Law */}
          <Card>
            <CardContent className="p-6 space-y-3">
              <h2 className="text-2xl font-semibold">10. Governing Law</h2>

              <p className="text-muted-foreground">
                These terms are governed by the laws of India. Jurisdiction lies in Uttarakhand courts.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardContent className="p-6 text-center space-y-3">
              <h2 className="text-2xl font-semibold">Contact Us</h2>

              <p className="text-muted-foreground">
                Have questions? Reach out anytime:
              </p>

              <Link href="mailto:yatidham1008@gmail.com" className="block text-primary hover:underline">
                📧 yatidham1008@gmail.com
              </Link>

              <Link href="tel:+919259071008" className="block text-primary hover:underline">
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