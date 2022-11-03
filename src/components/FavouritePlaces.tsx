import Place from './Place' 

function FavouritePlaces (): JSX.Element {
    return (
        <Place
            title={'Open and Green'}
            place={'Leicester Bradgate Park'}
            country={'United Kingdom'}
            image={'https://www.picturesofengland.com/img/F/1050167.jpg'}
            maps={'1'}
            description={'A gigantic park with lots of pretty places. Has deers, a broken down castle and the highest point in Leicester.'}
        />
    )
}

export default FavouritePlaces;
