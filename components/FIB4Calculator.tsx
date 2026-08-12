'use client'

import { useState } from 'react'
import { Calculator, RotateCcw, ShieldCheck, Stethoscope } from 'lucide-react'

const getInterpretation = (score: number) => {
  if (score < 1.45) {
    return {
      label: 'Advanced fibrosis less likely',
      detail: 'In the original validation cohort, a FIB-4 score below 1.45 had a 90% negative predictive value for advanced fibrosis.',
    }
  }

  if (score > 3.25) {
    return {
      label: 'Advanced fibrosis more likely',
      detail: 'In the original validation cohort, a FIB-4 score above 3.25 had 97% specificity and a 65% positive predictive value for advanced fibrosis.',
    }
  }

  return {
    label: 'Indeterminate result',
    detail: 'A score from 1.45 through 3.25 cannot reliably rule advanced fibrosis in or out. Further clinical assessment may be needed.',
  }
}

export default function FIB4Calculator() {
  const [age, setAge] = useState('')
  const [ast, setAst] = useState('')
  const [alt, setAlt] = useState('')
  const [platelets, setPlatelets] = useState('')

  const ageValue = Number(age)
  const astValue = Number(ast)
  const altValue = Number(alt)
  const plateletValue = Number(platelets)
  const isComplete = age !== '' && ast !== '' && alt !== '' && platelets !== ''
  const isValid = isComplete && ageValue > 0 && astValue > 0 && altValue > 0 && plateletValue > 0
  const score = isValid
    ? (ageValue * astValue) / (plateletValue * Math.sqrt(altValue))
    : null
  const interpretation = score === null ? null : getInterpretation(score)

  const reset = () => {
    setAge('')
    setAst('')
    setAlt('')
    setPlatelets('')
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-[#800000]/10 bg-white shadow-xl shadow-[#800000]/5">
      <div className="bg-gradient-to-r from-[#800000] to-[#9b2c2c] px-6 py-8 text-white md:px-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#FFD27A]">Advanced fibrosis screening</p>
            <h2 className="text-3xl font-bold md:text-4xl">FIB-4 Calculator</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
              Estimate the Fibrosis-4 score using age and routine blood test results.
            </p>
          </div>
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10">
            <Calculator className="h-8 w-8 text-[#FFD27A]" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-6 md:p-10">
          <div className="mb-8 rounded-2xl bg-[#800000]/5 p-5 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#800000]">Formula</p>
            <p className="mt-2 text-base font-bold text-gray-900 md:text-lg">
              FIB-4 = (age × AST) ÷ (platelet count × √ALT)
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-gray-800">
              Age
              <div className="relative">
                <input
                  type="number"
                  inputMode="decimal"
                  min="0.01"
                  step="any"
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                  placeholder="Example: 50"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-20 text-base font-normal text-gray-900 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/15"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-normal text-gray-500">years</span>
              </div>
            </label>

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
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-normal text-gray-500">U/L</span>
              </div>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-gray-800">
              ALT level
              <div className="relative">
                <input
                  type="number"
                  inputMode="decimal"
                  min="0.01"
                  step="any"
                  value={alt}
                  onChange={(event) => setAlt(event.target.value)}
                  placeholder="Example: 60"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-20 text-base font-normal text-gray-900 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/15"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-normal text-gray-500">U/L</span>
              </div>
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
          </div>

          {isComplete && !isValid && (
            <p role="alert" className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              Enter values greater than zero in all four fields.
            </p>
          )}

          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#800000]/20 px-5 py-2.5 text-sm font-semibold text-[#800000] transition hover:bg-[#800000]/5"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Reset values
          </button>
        </div>

        <div className="flex flex-col bg-[#FFF8EC] p-6 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#800000]">Your FIB-4 score</p>
          <div aria-live="polite" className="mt-4 flex min-h-64 flex-col justify-center rounded-3xl border border-[#FFA500]/30 bg-white p-7 shadow-sm">
            {score === null ? (
              <div className="text-center">
                <Stethoscope className="mx-auto h-10 w-10 text-[#800000]/35" aria-hidden="true" />
                <p className="mt-4 text-lg font-semibold text-gray-700">Enter all four values to see the result.</p>
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
        <h3 className="text-xl font-bold text-[#800000]">FIB-4 interpretation for advanced fibrosis</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {[
            ['Below 1.45', 'Advanced fibrosis less likely'],
            ['1.45–3.25', 'Indeterminate result'],
            ['Above 3.25', 'Advanced fibrosis more likely'],
          ].map(([range, label]) => (
            <div key={range} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-bold text-gray-900">{range}</p>
              <p className="mt-1 text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border-l-4 border-[#FFA500] bg-amber-50 p-5 text-sm leading-6 text-gray-700">
          <strong>Important:</strong> FIB-4 is a screening estimate, not a diagnosis. The original thresholds were validated in adults with HIV/HCV coinfection, and performance can differ by age, condition, and population. A clinician should interpret the result with medical history and other fibrosis assessments.
        </div>

        <p className="mt-6 text-sm leading-6 text-gray-500">
          Formula, thresholds, and clinical background reference:{' '}
          <a
            href="https://www.hepatitisc.uw.edu/page/clinical-calculators/fib-4"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#800000] underline decoration-[#FFA500] underline-offset-4 hover:text-[#FFA500]"
          >
            Hepatitis C Online, University of Washington
          </a>
          . Original validation: Sterling et al., <em>Hepatology</em> (2006).
        </p>
      </div>
    </section>
  )
}
