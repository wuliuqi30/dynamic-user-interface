// index.js
import { buildMenu } from './buildMenu'
import { buildImageCarousel, showNthSlide } from './imageCarousel'
import "./styles.css";

import{imgArrayMedieval,imgCaptionsMedieval,imgArrayEarlyModern,imgCaptionsEarlyModern} from './globals.js';




buildMenu(
    'header',
    'eras-return',
    'eras',
    ['noneselected',  'medieval', 'earlymodern'],
    ['-----   Select An Option   -----', 'Medieval', 'Early Modern']);

