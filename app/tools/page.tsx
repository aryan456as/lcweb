import type { Metadata } from 'next'
import APRICalculator from '../../components/APRICalculator'
import BMICalculator from '../../components/BMICalculator'
import FIB4Calculator from '../../components/FIB4Calculator'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export const metadata: Metadata = {
  title: 'Free APRI, FIB-4 & BMI Calculators | LiverCure',
  description: 'Use free APRI, FIB-4, and BMI calculators online. Estimate liver fibrosis screening scores and adult body mass index privately on your device.',
  keywords: [
    'APRI calculator',
    'AST platelet ratio index calculator',
    'liver fibrosis calculator',
    'FIB-4 calculator',
    'fibrosis 4 score calculator',
    'BMI calculator',
    'body mass index calculator',
    'liver health tools',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Free APRI, FIB-4 & BMI Calculators | LiverCure',
    description: 'Calculate APRI, FIB-4, and adult BMI privately with free, easy-to-use clinical screening tools.',
    type: 'website',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalWebPage',
      name: 'Free APRI, FIB-4, and BMI Calculators',
      description: 'Free online APRI, FIB-4, and adult BMI calculators with formulas, interpretation ranges, and educational guidance.',
      about: [
        { '@type': 'MedicalTest', name: 'AST to Platelet Ratio Index (APRI)' },
        { '@type': 'MedicalTest', name: 'Fibrosis-4 (FIB-4) score' },
        { '@type': 'MedicalTest', name: 'Body Mass Index (BMI)' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How is the FIB-4 score calculated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FIB-4 is calculated as age multiplied by AST, divided by platelet count multiplied by the square root of ALT.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the APRI score?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The AST to Platelet Ratio Index is a non-invasive estimate that uses AST, the AST upper limit of normal, and platelet count to help assess the likelihood of liver fibrosis or cirrhosis.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is APRI calculated?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'APRI is calculated as AST divided by the AST upper limit of normal, divided by platelet count in 10^9/L, then multiplied by 100.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a healthy BMI for adults?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For most adults, a BMI from 18.5 to 24.9 is generally classified as the healthy weight range. BMI is a screening measure and does not diagnose health conditions.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are calculator values stored?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. All three calculators run in the browser, and entered values are not sent to or stored on a server.',
          },
        },
      ],
    },
  ],
}

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <section className="relative overflow-hidden pb-20 pt-32">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[#800000]/8 to-transparent" aria-hidden="true" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#FFA500]">Clinical tools</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#800000] md:text-6xl">Liver Health Calculators</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              Free, private calculators that help you understand common clinical measurements. Estimate APRI and FIB-4 liver fibrosis screening scores or calculate adult BMI.
            </p>
            <nav aria-label="Calculator links" className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="#apri-calculator" className="rounded-full bg-[#800000] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#FFA500]">APRI Calculator</a>
              <a href="#fib-4-calculator" className="rounded-full border border-[#800000]/20 bg-white px-5 py-2.5 text-sm font-bold text-[#800000] transition hover:bg-[#800000]/5">FIB-4 Calculator</a>
              <a href="#bmi-calculator" className="rounded-full border border-[#800000]/20 bg-white px-5 py-2.5 text-sm font-bold text-[#800000] transition hover:bg-[#800000]/5">BMI Calculator</a>
            </nav>
          </div>

          <div id="apri-calculator" className="scroll-mt-28">
            <APRICalculator />
          </div>

          <article className="mx-auto my-14 max-w-4xl text-gray-700">
            <h2 className="text-3xl font-black text-[#800000]">What is an APRI calculator?</h2>
            <p className="mt-4 leading-7">
              APRI stands for AST to Platelet Ratio Index. It is a non-invasive calculation that combines an aspartate aminotransferase blood test result with platelet count. Clinicians may use APRI as one part of liver fibrosis assessment, especially in people with hepatitis C. It can help estimate risk, but it does not replace clinical evaluation, imaging, elastography, or other fibrosis tests.
            </p>
            <h3 className="mt-8 text-xl font-bold text-gray-900">How to use the APRI calculator</h3>
            <ol className="mt-4 grid gap-3 leading-7">
              <li><strong>1. Enter AST:</strong> use the AST level shown on the blood test report in IU/L.</li>
              <li><strong>2. Enter the laboratory upper limit:</strong> use the AST upper limit of normal from the same report. If unavailable, 40 IU/L is commonly used in APRI studies.</li>
              <li><strong>3. Enter platelet count:</strong> use the result expressed in 10⁹/L.</li>
            </ol>
          </article>

          <div id="fib-4-calculator" className="scroll-mt-28">
            <FIB4Calculator />
          </div>

          <article className="mx-auto my-14 max-w-4xl text-gray-700">
            <h2 className="text-3xl font-black text-[#800000]">What is a FIB-4 calculator?</h2>
            <p className="mt-4 leading-7">
              The Fibrosis-4 score combines age, AST, ALT, and platelet count to estimate the likelihood of advanced liver fibrosis. It is a non-invasive screening calculation that can help clinicians decide whether additional fibrosis assessment may be appropriate.
            </p>
            <h3 className="mt-8 text-xl font-bold text-gray-900">How to use the FIB-4 calculator</h3>
            <ol className="mt-4 grid gap-3 leading-7">
              <li><strong>1. Enter age:</strong> use the patient’s age in years.</li>
              <li><strong>2. Enter AST and ALT:</strong> use results from the same blood test in U/L.</li>
              <li><strong>3. Enter platelet count:</strong> use the result expressed in 10⁹/L.</li>
            </ol>
          </article>

          <div id="bmi-calculator" className="scroll-mt-28">
            <BMICalculator />
          </div>

          <article className="mx-auto my-14 max-w-4xl text-gray-700">
            <h2 className="text-3xl font-black text-[#800000]">How the BMI calculator works</h2>
            <p className="mt-4 leading-7">
              Body mass index compares weight with height to provide a general adult weight category. The metric formula is weight in kilograms divided by height in metres squared. The imperial formula multiplies weight in pounds by 703, then divides by height in inches squared.
            </p>
            <p className="mt-4 leading-7">
              BMI can be useful for population screening, but it does not measure body fat distribution, muscle mass, nutrition, or metabolic health. Waist measurement, medical history, laboratory results, and a clinician’s assessment can provide a more complete health picture.
            </p>
          </article>

          <section className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-lg shadow-[#800000]/5 md:p-10" aria-labelledby="tools-faq-heading">
            <h2 id="tools-faq-heading" className="text-3xl font-black text-[#800000]">Frequently asked questions</h2>
            <div className="mt-7 divide-y divide-gray-200">
              {[
                ['What is the APRI score?', 'The AST to Platelet Ratio Index is a non-invasive estimate that uses AST, the AST upper limit of normal, and platelet count to help assess the likelihood of liver fibrosis or cirrhosis.'],
                ['How is APRI calculated?', 'Divide AST by the AST upper limit of normal, divide that result by platelet count in 10⁹/L, and multiply by 100.'],
                ['How is FIB-4 calculated?', 'Multiply age by AST, then divide by platelet count multiplied by the square root of ALT. Scores below 1.45 and above 3.25 were used as lower and upper cutoffs in the original validation study.'],
                ['What is a healthy BMI for adults?', 'For most adults, a BMI from 18.5 to 24.9 is generally classified as a healthy weight range. BMI is a screening measure, not a diagnosis.'],
                ['Are my calculator values stored?', 'No. APRI, FIB-4, and BMI calculations happen in your browser. The values you enter are not submitted to or stored on a server.'],
              ].map(([question, answer]) => (
                <div key={question} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-bold text-gray-900">{question}</h3>
                  <p className="mt-2 leading-7 text-gray-600">{answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <Footer />
    </main>
  )
}
