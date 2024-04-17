import React, { useState } from 'react'
import RecipeNavbar from './RecipeNavbar'

const ViewRecipe = () => {
    const [data, changeData] = useState(
        [

            { "RecipeTitle": "Teriyaki Chicken", "IMGLink": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/1d47125afffa461a9711758f632306b8/BFV12484_3-IngredientDinners-FB1080SQ.jpg?resize=1000:*&output-format=auto&output-quality=auto" },
            { "RecipeTitle": "Banana Oat Smoothie", "IMGLink": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/5eeb78d0e7af4e59867fa6c19ba01825/BFV32433_3-IngredientBreakfasts-FB1080.jpg?resize=600:*&output-format=auto&output-quality=auto" },
            { "RecipeTitle": "BBQ Chicken Tenders", "IMGLink": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/72720aa0fee04046967e34388f0526e7/BFV11486_3IngredientAppetizers-FB1080SQ.jpg?resize=600:*&output-format=auto&output-quality=auto" },
            { "RecipeTitle": "Shawarma", "IMGLink": "https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=0.668xw:1.00xh;0.168xw,0&resize=1200:*" },
            { "RecipeTitle": "Jalapeño Poppers", "IMGLink": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/f5ca94bf8118491dbdbc1c2977ce75cc/BFV11486_3IngredientAppetizers-FB1080SQ.jpg?resize=600:*&output-format=auto&output-quality=auto" },
            { "RecipeTitle": "Cookie Butter Cakes", "IMGLink": "https://img.buzzfeed.com/video-api-prod/assets/98bcbe381b1e48898e8a3d60e2d3c3af/BFV5573_3-IngredientCookieButterCakes-Thumb1080SQ.jpg?resize=600:*&output-format=auto&output-quality=auto" },
            { "RecipeTitle": "Caramel Banana Crepes", "IMGLink": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/3f2f5ec67e414ed68dc774f6129a8740/BFV9642_Crepes_4_Ways-FB1080.jpg?resize=600:*&output-format=auto&output-quality=auto" },
            { "RecipeTitle": "Egg Mozzarella Sticks", "IMGLink": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/45989167495e491e8032cf38cf51b0c9/BFV11486_3IngredientAppetizers-FB1080SQ.jpg?resize=600:*&output-format=auto&output-quality=auto" },
            { "RecipeTitle": "Strawberry Icebox Cake", "IMGLink": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/b486a315a9d94a0fbcc874676880e595/BFV12524_3-IngredientNo-BakeDesserts-FB1080SQ.jpg?resize=600:*&output-format=auto&output-quality=auto" },
            { "RecipeTitle": "Cookies & Ice Cream Pie", "IMGLink": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/46011711959c4fc8a1655495fcb9e2e0/BFV12524_3-IngredientNo-BakeDesserts-FB1080SQ.jpg?resize=600:*&output-format=auto&output-quality=auto" },
            { "RecipeTitle": "Peanut Butter Cups", "IMGLink": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/fb9d7e9596b6441086e68fe5eee87650/BFV12524_3-IngredientNo-BakeDesserts-FB1080SQ.jpg?resize=600:*&output-format=auto&output-quality=auto" },
            { "RecipeTitle": "Dulce De Leche Fudge", "IMGLink": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/7d9f27afb73f4085971c803a17b6a05d/BFV21607_3-ingredient_fudge_4_ways_FB_.jpg?resize=600:*&output-format=auto&output-quality=auto" },
            { "RecipeTitle": "Chocolate Walnut Fudge", "IMGLink": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/64cecb2583fa41baadafde2a1b78db92/BFV21607_3-ingredient_fudge_4_ways_FB_.jpg?resize=600:*&output-format=auto&output-quality=auto" },
            { "RecipeTitle": "Cloud Bread", "IMGLink": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/ee9f5904ce33444182bb12e2dce0b005/Tasty_-_Facebook_-_1080x1080.jpg?resize=600:*&output-format=auto&output-quality=auto" },
            { "RecipeTitle": "Cookies", "IMGLink": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/99679.jpg?resize=600:*&output-format=auto&output-quality=auto" }
        ])
    return (
        <div>
            <RecipeNavbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">

                            <br />
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card" >
                                            <img src={value.IMGLink} height="300px" width="300px" class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.RecipeTitle}</h5>
                                                <a href="#" class="btn btn-success">view</a>
                                            </div>
                                        </div>

                                    </div>

                                })
                            }

                        </div>


                    </div>
                </div>
            </div>




        </div>
    )
}

export default ViewRecipe