const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const doubles = numbers.map(function (num){
    return num * 2;
})


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


//way1
// const titles = movies.map(function (movie) {
//     return movie.title.toUpperCase();
// })

//way2
// arrowFunction을 많이 쓰도록 연습하기
const newMovies = movies.map(movie => (// 소괄호, 중괄호 상관 없음
`${movie.title} - ${movie.score / 10}`
     //단, 소괄호로만 쓰려면 return 쓰지 않음
))
