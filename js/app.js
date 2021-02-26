// 404003-MusicPic-HKGVIEYD

let userInput, musicData;

const $similarTo = $('#similarTo')
const $results = $('results')

$('form').on('submit', getMusicData)

const getMusicData = (data) => {
  event.preventDefault();
  userInput = $input.val();

  $.ajax()({
  url: 'https://tastedive.com/api/similar?' + userInput + '&k=404003-MusicPic-HKGVIEYD'
  }).then(
      (data) => {
          musicData = data
          displayResults()
      }
      (error) => {
          console.log('Invalid Request', error)
      }
  )
};
