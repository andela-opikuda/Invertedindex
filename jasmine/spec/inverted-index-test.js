// bad content
const badOne = require('./badOne.json');
const badTwo = require('./badTwo.json');
// good content
const goodOne = require('./goodOne.json');
const goodTwo = require('./goodTwo.json');
const goodThree = require('./goodThree.json');
// empty
const empty = require('./empty.json');
// bad content, no array
const noArray = require('./noArray.json');
const noArrayTwo = require('./noArrayTwo.json');
// text objects
const textObjOne = require('./textObjOne.json');
const textObjTwo = require('./textObjTwo.json');
// text Arrays
const textArrayOne = require('./textArrayOne.json');
const textArrayTwo = require('./textArrayTwo.json');
// text objects with array values
const textObjWordArrayOne = require('./textObjWordArrayOne.json');
const textObjWordArrayTwo = require('./textObjWordArrayTwo.json');



const invertedIndex = new InvertedIndex();

// describe('Inverted Index Test', () => {
//   describe('It Validate Book Data', () => {
//     it('should return invalid file type if book is not an array of objects',
//      () => {
//        expect(true).toBe(true);
//      });
//   });
// });
describe('INVERTED INDEX CLASS TESTS', () => {

  describe('Transform To Singles Function', () => {
    // const token = invertedIndex.tokenize(textObjWordArrayOne);
    console.log(textObjWordArrayOne);
    console.log(JSON.stringify(textObjWordArrayOne));
    this.index = {};
    // console.log(obj);
    // console.log(JSON.stringify(obj));
    // console.log(Object.keys(obj))
    // console.log(obj)
    // console.log(JSON.stringify(obj));
    Object.keys(textObjWordArrayOne).forEach((key) => {
      this.textArray.forEach((word) => {
        if (textObjWordArrayOne[key].includes(word)) {
          if (this.index[word] === undefined) {
            this.index[word] = [];
            this.index[word].push(parseInt(key));
          } else if (this.index[word].includes(parseInt(key))) {
            return;
          } else {
            this.index[word].push(parseInt(key));
          };
        } else {
          return;
        }
      });
    });
    console.log(JSON.stringify(this.index))
    // it(`should return an object with all words as keys and indexes of the 
    // books they are contained in when given a valid book as input`, () => {
    //   expect()
    //    .toEqual(
    //      {
    //        "a":[1,3],"rabbit":[1],"hole":[1],"man":[2],
    //        "elf":[2],"dwarf":[2],"wizard":[2],"and":[2,3],
    //        "hobbit":[2],"alice":[3],"falls":[3],"enters":[3],
    //        "world":[3],"imagination":[4],"of":[4],"an":[4],
    //        "usual":[4],"spoon":[4]
    //       }
    //    );
    // });
    // it(`should return an object with all words as keys and indexes of the 
    // books they are contained in when given a valid book as input`, () => {
    //   expect(invertedIndex.tokenize(textObjWordArrayTwo))
    //    .toEqual(
    //     {
    //       "full":[1],"of":[1],"imagination":[1],"a":[2,3],
    //       "powerful":[2],"ring":[2],"rabbit":[3],"with":[3],
    //       "an":[3],"usual":[3],"spoon":[3]
    //     }
    //    );
    // });
  });
  
  // describe('Transform To Singles Function', () => {
  //   it(`should return an object with all words as keys and indexes of the 
  //   books they are contained in when given a valid book as input`, () => {
  //     expect(invertedIndex.transformToArray(textArrayOne))
  //      .toEqual(
  //        [ "a", "rabbit", "with", "an", "usual", "spoon", "full", "of", "imagination","an", "unusual", "alliance", "of", "man"]
  //      );
  //   });
  //   it(`should return an object with all words as keys and indexes of the 
  //   books they are contained in when given a valid book as input`, () => {
  //     expect(invertedIndex.transformToArray(textArrayTwo))
  //      .toEqual(
  //        [ "man", "elf", "dwarf", "wizard", "and", "hobbit","full", "of", "imagination","imagination", "of", "an", "usual", "spoon" ] 
  //      );
  //   });
  // });

// describe('INVERTED INDEX CLASS TESTS', () => {

//   describe('Transform To Singles Function', () => {
//     it(`should return an object with all words as keys and indexes of the 
//     books they are contained in when given a valid book as input`, () => {
//       expect(invertedIndex.transformToSingles(textObjOne))
//        .toEqual(
//          { 
//            "1": [ "a", "rabbit", "with", "an", "usual", "spoon" ], 
//            "2": [ "full", "of", "imagination" ], 
//            "3": [ "an", "unusual", "alliance", "of", "man" ] 
//           }
//        );
//     });
//     it(`should return an object with all words as keys and indexes of the 
//     books they are contained in when given a valid book as input`, () => {
//       expect(invertedIndex.transformToSingles(textObjTwo))
//        .toEqual(
//          { 
//            "1": [ "man", "elf", "dwarf", "wizard", "and", "hobbit" ], 
//            "2": [ "full", "of", "imagination" ], 
//            "3": [ "imagination", "of", "an", "usual", "spoon" ]
//          }
//        );
//     });
//   });

  // describe('Create Function', () => {
  //   it(`should return an object with all words as keys and indexes of the 
  //   books they are contained in when given a valid book as input`, () => {
  //     expect(invertedIndex.createIndex(goodOne))
  //      .toEqual(
  //        { 
  //          alice: [ 1 ], falls: [ 1 ], and: [ 1 ],
  //          enters: [ 1 ], a: [ 1, 3 ], world: [ 1 ],
  //          an: [ 2 ], unusual: [ 2 ], alliance: [ 2 ],
  //          of: [ 2 ], man: [ 2 ], rabbit: [ 3 ],
  //          with: [ 3 ], wizarding: [ 3 ], powers: [ 3 ] 
  //         }
  //      );
  //   });
  //   it(`should return an object with all words as keys and indexes of the 
  //   books they are contained in when given a valid book as input`, () => {
  //     expect(invertedIndex.createIndex(goodTwo))
  //      .toEqual(
  //        { 
  //          a: [ 1, 3 ], rabbit: [ 1 ], hole: [ 1 ],
  //          and: [ 2, 3 ], man: [ 2 ], elf: [ 2 ], 
  //          dwarf: [ 2 ], wizard: [ 2 ], hobbit: [ 2 ], 
  //          alice: [ 3 ], falls: [ 3 ], enters: [ 3 ], 
  //          world: [ 3 ], an: [ 4 ], of: [ 4 ], 
  //          imagination: [ 4 ], usual: [ 4 ], spoon: [ 4 ]
  //        }
  //      );
  //   });
  // });
  
  // describe('Validate Content Function', () => {
  //   it(`should return true when given a
  //   valid book as input`, () => {
  //     expect(invertedIndex.validateContent(goodOne))
  //      .toBe(true);
  //   });
  //   it(`should return true when given a
  //   valid book as input`, () => {
  //     expect(invertedIndex.validateContent(goodTwo))
  //      .toBe(true);
  //   });
  //   it(`should return true when given a
  //   valid book as input`, () => {
  //     expect(invertedIndex.validateContent(goodThree))
  //      .toBe(true);
  //   });
  //   it(`should return false when given an
  //  invalid book as input`, () => {
  //     expect(invertedIndex.validateContent(badOne))
  //      .toBe(false);
  //   });
  //   it(`should return false when given an
  //  invalid book as input`, () => {
  //     expect(invertedIndex.validateContent(badTwo))
  //      .toBe(false);
  //   });
  //   it(`should return false when given an
  //  invalid book as input`, () => {
  //     expect(invertedIndex.validateContent(noArray))
  //      .toBe(false);
  //   });
  //   it(`should return false when given an
  //  invalid book as input`, () => {
  //     expect(invertedIndex.validateContent(noArrayTwo))
  //      .toBe(false);
  //   });
  // });






  // describe('BUILD-INDEX FUNCTION', () => {
  //   it('should return true when building index for  valid data', () => {
  //     expect(invertedIndex.buildIndex(validBooks, 'validBooks')).toBe(true);
  //   });
  //   it('should return false when building index for invalid data', () => {
  //     expect(invertedIndex.buildIndex(badData, badData)).toBe(false);
  //   });
  //   it('should return false when building index for an invalid type', () => {
  //     expect(invertedIndex.buildIndex(badArray, 'badArray')).toBe(false);
  //   });
  //   it(`should return correct index when
  //    building index for a valid file`, () => {
  //     expect(mockIndex.mainIndex).toEqual(builtIndex);
  //   });
  // });
  // describe('SEARCH-ALL FUNCTION', () => {
  //   it(`should take in a word and return all
  //   books the words can be found in`, () => {
  //     expect(invertedIndex.searchAll('to'))
  //     .toEqual(['The Lord of the Rings: The Fellowship of the Ring.']);
  //   });
  //   it(`should take in a word that is not indexed 
  //   and return an empty array indicating not found`, () => {
  //     expect(invertedIndex.searchAll('get'))
  //     .toEqual([]);
  //   });
  // });
  // describe('SEARCH-BY-FILE FUNCTION', () => {
  //   it(`should take in a word and a file name and
  //    return search results for that file`, () => {
  //     expect(mockIndex.searchByFile('abeg', 'newData.json'))
  //     .toEqual(['Alice in wonderland']);
  //   });
  //   it(`should take in words not available in a file
  //    and a file name and return search results for`, () => {
  //     expect(mockIndex.searchByFile('our', 'newData.json'))
  //     .toEqual([]);
  //   });
  // });
});