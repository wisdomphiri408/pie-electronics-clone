const Policies = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Policies</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
          <p className="mb-4">
            At Pie Tech, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.
          </p>
          <h3 className="text-lg font-semibold mb-2">Information We Collect</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Personal information (name, email, phone) when you register</li>
            <li>Payment information for transactions</li>
            <li>Usage data and browsing history</li>
            <li>Product preferences and reviews</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">How We Use Your Information</h3>
          <ul className="list-disc list-inside">
            <li>To process orders and provide customer service</li>
            <li>To improve our platform and services</li>
            <li>To send important updates and notifications</li>
            <li>To prevent fraud and ensure security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
          <p className="mb-4">
            By using Pie Tech, you agree to these terms. Please read them carefully.
          </p>
          <h3 className="text-lg font-semibold mb-2">User Responsibilities</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Provide accurate and complete information</li>
            <li>Use the platform for lawful purposes only</li>
            <li>Respect other users and sellers</li>
            <li>Protect your account credentials</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Seller Terms</h3>
          <ul className="list-disc list-inside">
            <li>List only genuine, legal products</li>
            <li>Provide accurate product descriptions</li>
            <li>Ship products promptly and as described</li>
            <li>Maintain good customer service standards</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
          <p className="mb-4">
            We want you to be satisfied with your purchases. Here's our refund policy:
          </p>
          <h3 className="text-lg font-semibold mb-2">Eligibility for Refunds</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Products that arrive damaged or defective</li>
            <li>Products that don't match the description</li>
            <li>Wrong items shipped</li>
            <li>Items that fail within 7 days of delivery</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Refund Process</h3>
          <ol className="list-decimal list-inside">
            <li>Contact our support team within 7 days of delivery</li>
            <li>Provide photos/videos of the issue</li>
            <li>Return the item in original packaging</li>
            <li>Refund processed within 5-7 business days</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Policies;