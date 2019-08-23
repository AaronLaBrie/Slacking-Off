import express from 'express'

import { alert } from './alert'
import { ceb } from './ceb'
import { clap } from './clap'
import { dadJoke } from './dadjoke'
import { digital } from './digital'
import { giff } from './giff'
import { hermes } from './hermes'
import { notail } from './notail'
import { pitchfork } from './pitchfork'
import { riot } from './riot'
import { tableFlip } from './tableflip'

const router = express.Router()

router.post('/alert', alert)
router.post('/clap', clap)
router.post('/ceb', ceb)
router.post('/dadjoke', dadJoke)
router.post('/digital', digital)
router.post('/giff', giff)
router.post('/hermes', hermes)
router.post('/notail', notail)
router.post('/pitchfork', pitchfork)
router.post('/riot', riot)
router.post('/tableflip', tableFlip)

export const commands = router
