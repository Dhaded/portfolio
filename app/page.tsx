export default function Home() {
  return (
    <section>
      <h1 className="text-5xl font-bold leading-tight">
        Backend Engineer building scalable distributed systems.
      </h1>

      <p className="text-xl text-gray-400 max-w-3xl mt-6">
        Certified Kubernetes Application Developer (CKAD) and Elastic Stack (ELK) certified.
        Architected engineering analytics platform across 300+ repositories.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">

        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Enterprise Impact</h2>
          <ul className="space-y-2 text-gray-400">
            <li>• 300+ repositories analyzed</li>
            <li>• 120+ engineering teams supported</li>
            <li>• 45% query latency reduction</li>
            <li>• 20% infra cost reduction</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a href="https://www.credly.com/badges/14c703d9-35d5-4507-8ef2-2f3f697ee36e/public_url"
                 target="_blank" className="text-indigo-400 underline">
                 Certified Kubernetes Application Developer (CKAD) – Verify Badge
              </a>
            </li>
            <li>
              <a href="https://www.credly.com/badges/03f7988d-6ced-40f4-bbde-054b8324670f/public_url"
                 target="_blank" className="text-indigo-400 underline">
                 Elastic Stack (ELK) Certification – Verify Badge
              </a>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}
