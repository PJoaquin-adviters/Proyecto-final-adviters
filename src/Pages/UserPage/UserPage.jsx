import React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { TextField } from '@mui/material';
import "./UserPage.css"

const UserPage = () => {
    return (
        <form className='form-user'>
            <div>
                <h1>Nuevo usuario</h1>
            </div>
            <section className='user-input-container'>
                <div className='input-container-column'>
                    <img src="" alt="" />

                    <Select
                        placeholder="Select a pet…"
                        indicator={<KeyboardArrowDown />}
                        sx={{
                            width: 240,
                            [`& .${selectClasses.indicator}`]: {
                                transition: '0.2s',
                                [`&.${selectClasses.expanded}`]: {
                                    transform: 'rotate(-180deg)',
                                },
                            },
                        }}
                    >
                        <Option value="dog">Dog</Option>
                        <Option value="cat">Cat</Option>
                        <Option value="fish">Fish</Option>
                        <Option value="bird">Bird</Option>
                    </Select>

                    <TextField
                        id="outlined-required"
                        label="DNI"
                        defaultValue="23434545"
                    />

                    <TextField
                        id="outlined-required"
                        label="DNI"
                        defaultValue="23434545"
                    />
                    <TextField
                        id="outlined-required"
                        label="DNI"
                        defaultValue="23434545"
                    />
                    <TextField
                        id="outlined-required"
                        label="DNI"
                        defaultValue="23434545"
                    />
                    <TextField
                        id="outlined-required"
                        label="DNI"
                        defaultValue="23434545"
                    />

                    <div className='input-container-column'>
                        <h2>col 2</h2>
                        <TextField
                            id="outlined-required"
                            label="DNI"
                            defaultValue="23434545"
                        />
                        <TextField
                            id="outlined-required"
                            label="DNI"
                            defaultValue="23434545"
                        />
                        <TextField
                            id="outlined-required"
                            label="DNI"
                            defaultValue="23434545"
                        />
                        <TextField
                            id="outlined-required"
                            label="DNI"
                            defaultValue="23434545"
                        />
                        <TextField
                            id="outlined-required"
                            label="DNI"
                            defaultValue="23434545"
                        />
                        <TextField
                            id="outlined-required"
                            label="DNI"
                            defaultValue="23434545"
                        />
                    </div>


                </div>

            </section>

        </form>
    )
}

export default UserPage