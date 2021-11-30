const checker = require('./Test-Function');
const cutStringByStartPositionAndNumNextCut = require('../Exercise-18');
function checkExercise() {
  console.assert(cutStringByStartPositionAndNumNextCut(8, 13) === 'example for fu',
    'Error when input positive integer in MediumExercise-18');
  console.assert(cutStringByStartPositionAndNumNextCut(-8, -13) === 'start and end must be a positive integer',
    'Error when entering negative number in MediumExercise-18');
  console.assert(cutStringByStartPositionAndNumNextCut(343.3423, 'f') === 'start and end must be a positive integer',
    'Error when entering character in MediumExercise-18');
  console.assert(cutStringByStartPositionAndNumNextCut(3.32, 7) === 'start and end must be a positive integer',
    'Error when entering decimals in MediumExercise-18');
  console.assert(cutStringByStartPositionAndNumNextCut(343, 7) === 'start + numNext must be shorter than str.length',
    'Error when entering start > str.length in MediumExercise-18');
  console.assert(cutStringByStartPositionAndNumNextCut('ds', 7) === 'start and end must be a positive integer',
    'Error when entering character in MediumExercise-18');
}
module.exports = checkExercise;