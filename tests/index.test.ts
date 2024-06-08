import { readFileSync, readdirSync } from 'fs'
import { resolve } from 'path'
import { expect, test } from 'vitest'
import changesetParser from '../index'

const filenames = readdirSync(resolve(__dirname, 'data'), { encoding: 'utf-8' })

filenames.forEach((filename) => {
  const tests = JSON.parse(readFileSync(resolve(__dirname, `data/${filename}`), 'utf-8'))
  tests.forEach(({ input, output: expectedOutput }, i) => {
    test(`testing ${filename}, test ${i + 1}`, () => {
      const actualOutput = changesetParser.elementParser(input)
      expect(actualOutput).toEqual(expectedOutput)
    })
  })
})
