'use client'

import { useState } from 'react'
import { Activity, Calculator, RotateCcw, ShieldCheck } from 'lucide-react'

const getInterpretation = (score: number) => {
  if (score < 0.5) {
    return {
      label: 'Lower likelihood range',
      detail: 'A score below 0.5 has greater ability to help rule out cirrhosis, but APRI alone cannot exclude significant liver disease.',
    }
  }

  if (score < 0.7) {
    return {
      label: 'Intermediate range',
      detail: 'This result is below the commonly cited 0.7 threshold for significant hepatic fibrosis. Clinical context and other tests still matter.',
    }
  }

  if (score < 1) {
    return {
      label: 'Significant fibrosis threshold reached',
      detail: 'Scores above 0.7 are associated with an increased likelihood of significant hepatic fibrosis in hepatitis C studies.',
    }
  }

  if (score < 1.5) {
    return {
      label: 'Elevated APRI result',
      detail: 'Scores above 1.0 are associated with an increased likelihood of cirrhosis, but this result is not diagnostic on its own.',
    }
  }

  if (score < 2) {
    return {
      label: 'Higher likelihood range',
      detail: 'Scores above 1.5 have a greater positive predictive value for cirrhosis. Confirmatory clinical assessment is important.',
    }
  }

  return {
    label: 'High-specificity range',
    detail: 'A cutoff of 2.0 is more specific for cirrhosis, but has limited sensitivity and should not be used as a diagnosis by itself.',
  }
}

export default function APRICalculator() {
  const [ast, setAst] = useState('')
  const [astUpperLimit, setAstUpperLimit] = useState('40')
  const [platelets, setPlatelets] = useState('')

  const astValue = Number(ast)
  const upperLimitValue = Number(astUpperLimit)
  const plateletValue = Number(platelets)
  const isComplete = ast !== '' && astUpperLimit !== '' && platelets !== ''
  const isValid = isComplete && astValue > 0 && upperLimitValue > 0 && plateletValue > 0
  const score = isValid ? (astValue / upperLimitValue / plateletValue) * 100 : null
  const interpretation = score === null ? null : getInterpretation(score)

  const reset = () => {
    setAst('')
    setAstUpperLimit('40')
    setPlatelets('')
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-[#800000]/10 bg-white shadow-xl shadow-[#800000]/5">
      <div className="bg-[#800000] px-6 py-8 text-white md:px-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#FFD27A]">Liver fibrosis assessment</p>
            <h2 className="text-3xl font-bold md:text-4xl">APRI Calculator</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
              Estimate the AST to Platelet Ratio Index using values from a blood test report.
            </p>
          </div>
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10">
            <Calculator className="h-8 w-8 text-[#FFD27A]" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-6 md:p-10">
          <div className="mb-8 rounded-2xl bg-[#800000]/5 p-5 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#800000]">Formula</p>
            <p className="mt-2 text-lg font-bold text-gray-900 md:text-xl">
              APRI = (AST ÷ AST upper limit ÷ platelet count) × 100
            </p>
          </div>

          <div className="grid gap-6">
            <label className="grid gap-2 text-sm font-semibold text-gray-800">
              AST level
              <div className="relative">
                <input
                  type="number"
                  inputMode="decimal"
                  min="0.01"
                  step="any"
                  value={ast}
                  onChange={(event) => setAst(event.target.value)}
                  placeholder="Example: 80"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-20 text-base font-normal text-gray-900 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/15"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-normal text-gray-500">IU/L</span>
              </div>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-gray-800">
              AST upper limit of normal
              <div className="relative">
                <input
                  type="number"
                  inputMode="decimal"
                  min="0.01"
                  step="any"
                  value={astUpperLimit}
                  onChange={(event) => setAstUpperLimit(event.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-20 text-base font-normal text-gray-900 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/15"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-normal text-gray-500">IU/L</span>
              </div>
              <span className="font-normal leading-5 text-gray-500">Use the value from the laboratory report. A value of 40 IU/L is commonly used.</span>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-gray-800">
              Platelet count
              <div className="relative">
                <input
                  type="number"
                  inputMode="decimal"
                  min="0.01"
                  step="any"
                  value={platelets}
                  onChange={(event) => setPlatelets(event.target.value)}
                  placeholder="Example: 100"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-24 text-base font-normal text-gray-900 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/15"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-normal text-gray-500">10⁹/L</span>
              </div>
            </label>

            {isComplete && !isValid && (
              <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                Enter values greater than zero in all three fields.
              </p>
            )}

            <button
              type="button"
              onClick={reset}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[#800000]/20 px-5 py-2.5 text-sm font-semibold text-[#800000] transition hover:bg-[#800000]/5"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Reset values
            </button>
          </div>
        </div>

        <div className="flex flex-col bg-[#FFF8EC] p-6 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#800000]">Your APRI score</p>
          <div aria-live="polite" className="mt-4 rounded-3xl border border-[#FFA500]/30 bg-white p-7 shadow-sm">
            {score === null ? (
              <div className="flex min-h-48 flex-col items-center justify-center text-center">
                <Activity className="h-10 w-10 text-[#800000]/35" aria-hidden="true" />
                <p className="mt-4 text-lg font-semibold text-gray-700">Enter all three values to see the result.</p>
              </div>
            ) : (
              <div>
                <p className="text-6xl font-black tracking-tight text-[#800000]">{score.toFixed(2)}</p>
                <div className="my-6 h-px bg-gray-200" />
                <p className="text-lg font-bold text-gray-900">{interpretation?.label}</p>
                <p className="mt-2 text-sm leading-6 text-gray-600">{interpretation?.detail}</p>
              </div>
            )}
          </div>

          <div className="mt-6 flex gap-3 rounded-2xl bg-white/70 p-4 text-sm leading-6 text-gray-600">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#800000]" aria-hidden="true" />
            <p>Your values are calculated in this browser and are not sent to a server.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-6 py-8 md:px-10">
        <h3 className="text-xl font-bold text-[#800000]">Clinical interpretation landmarks</h3>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-5 py-4 font-semibold">APRI cutoff</th>
                <th className="px-5 py-4 font-semibold">Clinical association</th>
                <th className="px-5 py-4 font-semibold">Published performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-600">
              <tr>
                <td className="px-5 py-4 font-bold text-gray-900">&gt; 0.7</td>
                <td className="px-5 py-4">Significant hepatic fibrosis</td>
                <td className="px-5 py-4">77% sensitivity, 72% specificity</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-gray-900">&gt; 1.0</td>
                <td className="px-5 py-4">Cirrhosis</td>
                <td className="px-5 py-4">76% sensitivity, 72% specificity</td>
              </tr>
              <tr>
                <td className="px-5 py-4 font-bold text-gray-900">≥ 2.0</td>
                <td className="px-5 py-4">More specific cirrhosis cutoff</td>
                <td className="px-5 py-4">46% sensitivity, 91% specificity</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl border-l-4 border-[#FFA500] bg-amber-50 p-5 text-sm leading-6 text-gray-700">
          <strong>Important:</strong> APRI is a screening estimate, not a diagnosis. Results are best interpreted by a qualified clinician alongside medical history, examination, imaging, and other tests. Published thresholds are primarily based on studies of people with hepatitis C.
        </div>

        <p className="mt-6 text-sm leading-6 text-gray-500">
          Clinical reference:{' '}
          <a
            href="https://www.hepatitisc.uw.edu/page/clinical-calculators/apri"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#800000] underline decoration-[#FFA500] underline-offset-4 hover:text-[#FFA500]"
          >
            Hepatitis C Online, University of Washington
          </a>
          . Source evidence includes Lin et al., <em>Hepatology</em> (2011), and Chou &amp; Wasson, <em>Annals of Internal Medicine</em> (2013).
        </p>
      </div>
    </section>
  )
}
