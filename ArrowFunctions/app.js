// const add = function(x,y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

const add = (a, b) => a + b;


const square = num => {
    return num * num;
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

// 코드 길이를 줄일 수 있음
// 주사위 굴리기
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)



// 영화 object 만들기
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })


// 묵시적 반환 방법
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))





