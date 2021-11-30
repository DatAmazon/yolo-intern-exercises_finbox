const checker = require('./Test-Function');
const cutStringByStartEndPosition = require('../Exercise-17');
function checkExercise() {
  console.assert(cutStringByStartEndPosition(8, 13) === 'exampl', 'Error when input two positive in MediumExercise-17');
  console.assert(cutStringByStartEndPosition(-8, -13) === 'start and end must be a positive integer',
    'Error when input contain negative number in MediumExercise-17');
  console.assert(cutStringByStartEndPosition(343.3423, 'f') === 'start and end must be a positive integer',
    'Error when input is not integer positive in MediumExercise-17');
  console.assert(cutStringByStartEndPosition(432, 234) === 'start must be shorter than end; start, end must be shorter than str.length',
    'Error when input start or end longer than str.length in MediumExercise-17');
  console.assert(cutStringByStartEndPosition(432, 4) === 'start must be shorter than end; start, end must be shorter than str.length',
    'Error when input start or end longer than str.length in MediumExercise-17');
}
module.exports = checkExercise;
