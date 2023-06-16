import {useState} from 'react';
import {Button} from "./Button";

export default function Navbar({filterBySearch}) {
    const [searchValue, setSearchValue] = useState('');

    const onSearch = () => {
        filterBySearch(searchValue)
        setSearchValue('')
    };

    return (
        <div className="bg-primary">
            <div className="container mx-auto">
                <nav className="flex flex-wrap items-center justify-between py-4">
                    <a href="#" className="text-white">
                        <div className="brand-color font-medium text-xl">مطعم جديد</div>
                    </a>
                    <div className="flex  items-center">
                        <input
                            type="text"
                            placeholder="ابحث.."
                            className="px-2 py-1 mx-2 rounded"
                            onChange={(e) => setSearchValue(e.target.value)}
                            value={searchValue}
                        />
                        <Button onClick={onSearch} text='بحث'/>
                    </div>
                </nav>
            </div>
        </div>
    );
}

