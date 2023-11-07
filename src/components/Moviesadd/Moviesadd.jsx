import React, { useState } from 'react'
import './Moviesadd.css'


const Moviesadd = () => {

    const [Form, setForm] = useState([
        {
            Title: "",
            Year: "",
            Description: ""
        },
    ]);

    return (
        <div>
            <section class="formbg max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-20">
                <h2 class="text-3xl font-bold text-White-700 capitalize text-center mb-10">Add New movie</h2>

                <form>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-white-700 text-lg" for="username">Name</label>
                            <input id="name" type="text" 
                            value={Form.Title} 
                            onChange={(e) => setForm({ ...Form, Title: e.target.value })} 
                            class="inputbg block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300" />
                        </div>

                        <div>
                            <label class="text-white-700 text-lg" for="emailAddress">Year</label>
                            <input id="Year" type="string" value={Form.Year} onChange={(e) => setForm({ ...Form, Year: e.target.value })} class="inputbg block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300" />
                        </div>

                        <div>
                            <label class="text-white-700 text-lg" for="password">Description</label>
                            <textarea id="Description" type="text" value={Form.Description} onChange={(e) => setForm({ ...Form, Description: e.target.value })} class="inputbg block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300" />
                        </div>
                    </div>

                    <div class="flex justify-end mt-6">
                        <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>



        </div>
    )
}

export default Moviesadd