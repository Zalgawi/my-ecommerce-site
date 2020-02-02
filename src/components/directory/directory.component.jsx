import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [{
                    title: 'Hats & Beanies',
                    imageUrl: 'https://cdn.newsapi.com.au/image/v1/4a6dc02e83525e4f6c3ceadacc11d396?width=1024',
                    id: 1,
                    linkUrl: 'hats'
                  },
                  {
                    title: 'Jackets & Coats',
                    imageUrl: 'https://image.freepik.com/free-photo/back-view-man-wearing-red-jacket-looking-away-against-idyllic-landscape-tatra-mountains_81262-96.jpg',
                    id: 2,
                    linkUrl: 'jackets'
                  },
                  {
                    title: 'Shoes & Trainers',
                    imageUrl: 'https://cdn.luxe.digital/media/2019/09/11231455/luxe-digital-best-men-luxury-sneakers.jpg',
                    id: 3,
                    linkUrl: 'sneakers'
                  },
                  {
                    title: 'Womens',
                    imageUrl: 'https://c4.wallpaperflare.com/wallpaper/828/961/289/photography-women-model-landscape-car-mercedes-benz-vintage-car-see-through-clothing-wallpaper-preview.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'womens'
                  },
                  {
                    title: 'Mens',
                    imageUrl: 'https://cdn.shopify.com/s/files/1/0482/8569/files/Freenote_Cloth_Menswear_Trail_One_Collection_04.jpg?16071860117439637649',
                    size: 'large',
                    id: 5,
                    linkUrl: 'mens'
                  }]
        }
    }

    render() {
       return(
        <div className='directory-menu'>
        {
            this.state.sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))
        }
        </div>
       ) 
    }
}

export default Directory;