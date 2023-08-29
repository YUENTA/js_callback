// every는 callbackFunction이 거짓을 반환하는 요소를 찾을 때까지 배열에 있는 각 요소에 대해 한 번씩 callbackFunction 함수를 실행한다. 
// 해당하는 요소를 발견한 경우, every는 즉시 false를 반환한다. 
// 그렇지 않으면(즉, 모든 값에서 참을 반환하면) true를 반환한다. 
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

exams.every(score => score >= 75)

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2010
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]


movies.some(movie => movie.year > 2015)