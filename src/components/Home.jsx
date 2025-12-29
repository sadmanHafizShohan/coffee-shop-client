import React from 'react';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import { GiCoffeeBeans } from 'react-icons/gi';
const Home = () => {
    const coffees = useLoaderData();
    return (
        <div>
            <div className='flex flex-col items-center justify-between mt-12 mb-6 '>
                <h3 className='text-2xl font-rancho text-coffee'>--Sip & Savor--</h3>
                <h1 className='text-4xl font-rancho text-coffee'>Our Popular Coffees</h1>
                <button className='mt-5'><Link className='btn bg-coffee-light text-2xl text-white font-rancho border-coffee border-2 rounded-md' to='/addcoffee'> Add Coffee <GiCoffeeBeans className='text-coffee'/></Link>
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;