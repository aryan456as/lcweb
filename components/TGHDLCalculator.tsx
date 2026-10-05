'use client'

import { useState } from 'react'
import { Droplets, RotateCcw, ShieldCheck, Stethoscope } from 'lucide-react'

type Unit = 'mgdl' | 'mmol'

// Conversion factors from mmol/L to mg/dL
const TG_FACTOR = 88.57
const HDL_FACTOR = 38.67

// Interpretation bands use the ratio calculated from mg/dL values
const getInterpretation = (ratio: number) => {
  if (ratio < 2) {
    return {
      label: 'Lower ratio',
      detail: 'A ratio below 2.0 is generally considered favourable and is associated with a healthier lipid and metabolic profile.',
      color: 'text-emerald-700',
      background: 'bg-emerald-50',
    }
  }

  if (ratio < 4) {
    return {
      label: 'Intermediate ratio',
      detail: 'A ratio from 2.0 to 3.9 is intermediate. Values of about 3.0 and above have been linked with insulin resistance in some adult studies.',
      color: 'text-amber-700',
      background: 'bg-amber-50',
    }
  }

  return {
    label: 'Higher ratio',
    detail: 'A ratio of 4.0 or above is associated with insulin resistance, small dense LDL particles, and higher cardiometabolic risk.',
    color: 'text-red-700',
    background: 'bg-red-50',
  }
}

export default function TGHDLCalculator() {
  const [unit, setUnit] = useState<Unit>('mgdl')
  const [triglycerides, setTriglycerides] = useState('')
  const [hdl, setHdl] = useState('')

  const tgValue = Number(triglycerides)
  const hdlValue = Number(hdl)
  const isComplete = triglycerides !== '' && hdl !== ''
  const isValid = isComplete && tgValue > 0 && hdlValue > 0

  // Always calculate the ratio in mg/dL so the interpretation bands stay consistent
  const tgMgdl = unit === 'mgdl' ? tgValue : tgValue * TG_FACTOR
  const hdlMgdl = unit === 'mgdl' ? hdlValue : hdlValue * HDL_FACTOR
  const ratio = isValid ? tgMgdl / hdlMgdl : null
  const ratioMmol = ratio === null ? null : ratio * (HDL_FACTOR / TG_FACTOR)
  const interpretation = ratio === null ? null : getInterpretation(ratio)
  const unitLabel = unit === 'mgdl' ? 'mg/dL' : 'mmol/L'

  const reset = () => {
    setTriglycerides('')
    setHdl('')
  }

  const switchUnit = (nextUnit: Unit) => {
    setUnit(nextUnit)
    reset()
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-[#800000]/10 bg-white shadow-xl shadow-[#800000]/5">
      <div className="bg-gradient-to-r from-[#9b2c2c] to-[#800000] px-6 py-8 text-white md:px-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#FFD27A]">Metabolic health screening</p>
            <h2 className="text-3xl font-bold md:text-4xl">Triglyceride to HDL Ratio Calculator</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
              Calculate the triglyceride to HDL cholesterol ratio from a standard lipid profile.
            </p>
          </div>
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10">
            <Droplets className="h-8 w-8 text-[#FFD27A]" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-6 md:p-10">
          <div className="mb-8 rounded-2xl bg-[#800000]/5 p-5 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#800000]">Formula</p>
            <p className="mt-2 text-base font-bold text-gray-900 md:text-lg">
              TG/HDL ratio = triglycerides ÷ HDL cholesterol
            </p>
          </div>

          <div className="mb-8 grid grid-cols-2 rounded-xl bg-gray-100 p-1" role="group" aria-label="Lipid units">
            {([
              ['mgdl', 'mg/dL'],
              ['mmol', 'mmol/L'],
            ] as const).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => switchUnit(value)}
                className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                  unit === value ? 'bg-white text-[#800000] shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-pressed={unit === value}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-gray-800">
              Triglycerides
              <div className="relative">
                <input
                  type="number"
                  inputMode="decimal"
                  min="0.01"
                  step="any"
                  value={triglycerides}
                  onChange={(event) => setTriglycerides(event.target.value)}
                  placeholder={unit === 'mgdl' ? 'Example: 150' : 'Example: 1.7'}
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-24 text-base font-normal text-gray-900 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/15"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-normal text-gray-500">{unitLabel}</span>
              </div>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-gray-800">
              HDL cholesterol
              <div className="relative">
                <input
                  type="number"
                  inputMode="decimal"
                  min="0.01"
                  step="any"
                  value={hdl}
                  onChange={(event) => setHdl(event.target.value)}
                  placeholder={unit === 'mgdl' ? 'Example: 50' : 'Example: 1.3'}
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-24 text-base font-normal text-gray-900 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/15"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-normal text-gray-500">{unitLabel}</span>
              </div>
            </label>
          </div>

          {isComplete && !isValid && (
            <p role="alert" className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              Enter values greater than zero in both fields.
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
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#800000]">Your TG/HDL ratio</p>
          <div aria-live="polite" className="mt-4 flex min-h-64 flex-col justify-center rounded-3xl border border-[#FFA500]/30 bg-white p-7 shadow-sm">
            {ratio === null ? (
              <div className="text-center">
                <Stethoscope className="mx-auto h-10 w-10 text-[#800000]/35" aria-hidden="true" />
                <p className="mt-4 text-lg font-semibold text-gray-700">Enter both values to see the result.</p>
              </div>
            ) : (
              <div>
                <p className="text-6xl font-black tracking-tight text-[#800000]">{ratio.toFixed(2)}</p>
                <p className="mt-2 text-sm text-gray-500">
                  Ratio using mg/dL values{unit === 'mmol' ? ` (${ratioMmol?.toFixed(2)} using mmol/L values)` : ''}
                </p>
                <p className={`mt-5 inline-block rounded-full px-4 py-2 text-sm font-bold ${interpretation?.background} ${interpretation?.color}`}>
                  {interpretation?.label}
                </p>
                <p className="mt-4 text-sm leading-6 text-gray-600">{interpretation?.detail}</p>
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
        <h3 className="text-xl font-bold text-[#800000]">TG/HDL ratio ranges (mg/dL)</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {[
            ['Below 2.0', 'Lower ratio'],
            ['2.0–3.9', 'Intermediate ratio'],
            ['4.0 or above', 'Higher ratio'],
          ].map(([range, label]) => (
            <div key={range} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-bold text-gray-900">{range}</p>
              <p className="mt-1 text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm leading-6 text-gray-600">
          If your report uses mmol/L, select mmol/L above. The calculator converts the values to mg/dL (triglycerides × 88.57, HDL × 38.67), so the same ranges apply. A ratio of 2.0 in mg/dL is about 0.87 in mmol/L.
        </p>

        <div className="mt-6 rounded-2xl border-l-4 border-[#FFA500] bg-amber-50 p-5 text-sm leading-6 text-gray-700">
          <strong>Important:</strong> The TG/HDL ratio is a screening marker, not a diagnosis. There is no single guideline cutoff, and suitable thresholds differ by sex, ethnicity, and population. Triglycerides are best measured after fasting. A clinician should interpret the result with the full lipid profile, blood sugar tests, liver health, and medical history.
        </div>

        <p className="mt-6 text-sm leading-6 text-gray-500">
          Clinical background: McLaughlin et al., <em>Annals of Internal Medicine</em> (2003), which used a TG/HDL ratio of 3.0 or above to identify insulin resistance in overweight adults.
        </p>
      </div>
    </section>
  )
}
