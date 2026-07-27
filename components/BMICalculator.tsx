'use client'

import { useState } from 'react'
import { Ruler, Scale, ShieldCheck } from 'lucide-react'

type UnitSystem = 'metric' | 'imperial'

const getCategory = (bmi: number) => {
  if (bmi < 18.5) return { label: 'Underweight', color: 'text-sky-700', background: 'bg-sky-50' }
  if (bmi < 25) return { label: 'Healthy weight', color: 'text-emerald-700', background: 'bg-emerald-50' }
  if (bmi < 30) return { label: 'Overweight', color: 'text-amber-700', background: 'bg-amber-50' }
  return { label: 'Obesity range', color: 'text-red-700', background: 'bg-red-50' }
}

export default function BMICalculator() {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>('metric')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [feet, setFeet] = useState('')
  const [inches, setInches] = useState('')

  const weightValue = Number(weight)
  const heightValue = Number(height)
  const inchesValue = Number(inches || 0)
  const totalInches = Number(feet) * 12 + inchesValue
  const isComplete = unitSystem === 'metric'
    ? weight !== '' && height !== ''
    : weight !== '' && feet !== ''
  const isValid = isComplete && weightValue > 0 && (
    unitSystem === 'metric'
      ? heightValue > 0
      : Number(feet) > 0 && inchesValue >= 0 && inchesValue < 12
  )
  const bmi = !isValid
    ? null
    : unitSystem === 'metric'
      ? weightValue / ((heightValue / 100) ** 2)
      : (703 * weightValue) / (totalInches ** 2)
  const category = bmi === null ? null : getCategory(bmi)

  const switchUnits = (nextUnit: UnitSystem) => {
    setUnitSystem(nextUnit)
    setWeight('')
    setHeight('')
    setFeet('')
    setInches('')
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-[#800000]/10 bg-white shadow-xl shadow-[#800000]/5">
      <div className="bg-gradient-to-r from-[#663300] to-[#800000] px-6 py-8 text-white md:px-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#FFD27A]">Healthy weight screening</p>
            <h2 className="text-3xl font-bold md:text-4xl">BMI Calculator</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
              Calculate adult body mass index using metric or imperial measurements.
            </p>
          </div>
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10">
            <Scale className="h-8 w-8 text-[#FFD27A]" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-6 md:p-10">
          <div className="mb-8 grid grid-cols-2 rounded-xl bg-gray-100 p-1" aria-label="Measurement system">
            {(['metric', 'imperial'] as const).map((unit) => (
              <button
                key={unit}
                type="button"
                onClick={() => switchUnits(unit)}
                className={`rounded-lg px-4 py-2.5 text-sm font-semibold capitalize transition ${
                  unitSystem === unit ? 'bg-white text-[#800000] shadow-sm' : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-pressed={unitSystem === unit}
              >
                {unit}
              </button>
            ))}
          </div>

          <div className="grid gap-6">
            <label className="grid gap-2 text-sm font-semibold text-gray-800">
              Weight
              <div className="relative">
                <input
                  type="number"
                  inputMode="decimal"
                  min="0.01"
                  step="any"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                  placeholder={unitSystem === 'metric' ? 'Example: 70' : 'Example: 154'}
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-16 text-base font-normal text-gray-900 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/15"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-normal text-gray-500">
                  {unitSystem === 'metric' ? 'kg' : 'lb'}
                </span>
              </div>
            </label>

            {unitSystem === 'metric' ? (
              <label className="grid gap-2 text-sm font-semibold text-gray-800">
                Height
                <div className="relative">
                  <input
                    type="number"
                    inputMode="decimal"
                    min="0.01"
                    step="any"
                    value={height}
                    onChange={(event) => setHeight(event.target.value)}
                    placeholder="Example: 175"
                    className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-16 text-base font-normal text-gray-900 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/15"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-normal text-gray-500">cm</span>
                </div>
              </label>
            ) : (
              <fieldset className="grid gap-2">
                <legend className="mb-2 text-sm font-semibold text-gray-800">Height</legend>
                <div className="grid grid-cols-2 gap-4">
                  <label className="relative">
                    <span className="sr-only">Height in feet</span>
                    <input
                      type="number"
                      inputMode="numeric"
                      min="1"
                      step="1"
                      value={feet}
                      onChange={(event) => setFeet(event.target.value)}
                      placeholder="5"
                      className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-12 text-base text-gray-900 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/15"
                    />
                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">ft</span>
                  </label>
                  <label className="relative">
                    <span className="sr-only">Additional height in inches</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      min="0"
                      max="11.99"
                      step="any"
                      value={inches}
                      onChange={(event) => setInches(event.target.value)}
                      placeholder="9"
                      className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 pr-12 text-base text-gray-900 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#800000]/15"
                    />
                    <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">in</span>
                  </label>
                </div>
              </fieldset>
            )}

            {isComplete && !isValid && (
              <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                Enter a valid weight and height greater than zero.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col bg-[#FFF8EC] p-6 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#800000]">Your BMI</p>
          <div aria-live="polite" className="mt-4 flex min-h-64 flex-col justify-center rounded-3xl border border-[#FFA500]/30 bg-white p-7 text-center shadow-sm">
            {bmi === null ? (
              <>
                <Ruler className="mx-auto h-10 w-10 text-[#800000]/35" aria-hidden="true" />
                <p className="mt-4 text-lg font-semibold text-gray-700">Enter your weight and height to see the result.</p>
              </>
            ) : (
              <>
                <p className="text-6xl font-black tracking-tight text-[#800000]">{bmi.toFixed(1)}</p>
                <p className={`mx-auto mt-5 rounded-full px-4 py-2 text-sm font-bold ${category?.background} ${category?.color}`}>
                  {category?.label}
                </p>
                <p className="mt-5 text-sm leading-6 text-gray-600">For adults, a BMI from 18.5 to 24.9 is generally classified as a healthy weight range.</p>
              </>
            )}
          </div>

          <div className="mt-6 flex gap-3 rounded-2xl bg-white/70 p-4 text-sm leading-6 text-gray-600">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#800000]" aria-hidden="true" />
            <p>Your measurements stay on your device and are not stored or transmitted.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-6 py-8 md:px-10">
        <h3 className="text-xl font-bold text-[#800000]">Adult BMI ranges</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Below 18.5', 'Underweight'],
            ['18.5–24.9', 'Healthy weight'],
            ['25.0–29.9', 'Overweight'],
            ['30.0 or above', 'Obesity range'],
          ].map(([range, label]) => (
            <div key={range} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-bold text-gray-900">{range}</p>
              <p className="mt-1 text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-6 text-gray-600">
          BMI is a screening measure for adults, not a direct measurement of body fat or overall health. It may be less informative for children, pregnancy, older adults, and people with high muscle mass. Discuss weight or health concerns with a qualified clinician.
        </p>
      </div>
    </section>
  )
}
