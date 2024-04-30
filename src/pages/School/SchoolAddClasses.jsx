import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClasses } from "../../utils/classSlice"
import { Modal, Box } from '@mui/material';
import ClassCards from '../../components/ClassCards';
import axios from 'axios';

const SchoolAddClasses = () => {
  const dispatch = useDispatch();

  const classesList = useSelector((state) => state.classes.classesList);
  const isLoading = useSelector((state) => state.classes.loading);
  const error = useSelector((state) => state.classes.error);

  const [className, setClassName] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  useEffect(() => {
    if (classesList.length === 0) {
      dispatch(fetchClasses()); // Fetch only if classes are not in Redux
    }
  }, [dispatch, classesList]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!className.trim()) {
      console.error('Class name is required.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:4000/class/create',
        { className },
        { withCredentials: true }
      );

      if (response.status === 200) {
        setClassName(''); // Clear input
        dispatch(fetchClasses()); // Fetch updated list of classes
      }
    } catch (error) {
      if (error.response) {
        console.error('Error adding class:', error.response.status, error.response.data.message);
      } else {
        console.error('Error adding class:', error);
      }
    }

    handleClose(); // Close the modal after submission
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-center">
        <div>
          <button
            onClick={handleOpen}
            className="flex gap-2 bg-[#AEE6E6] text-white px-4 py-2 rounded hover:bg-[#41C9E2] max-w-36"
          >
            <p className="text-black font-ProductTitle">Add Class</p>
            <img src="/class.png" alt="" className="h-7 w-7" />
          </button>
        </div>

        <Modal open={openModal} onClose={handleClose}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 330,
              backgroundColor: 'white',
              padding: 4,
              borderRadius: 2,
              boxShadow: 24,
            }}
          >
            <h2 className="text-xl font-semibold mb-4">Add Class</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="className" className="block mb-1">
                  Class Name:
                </label>
                <input
                  type="text"
                  id="className"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Class
              </button>
            </form>
          </Box>
        </Modal>

        <div>
          {!isLoading && classesList.length > 0 ? (
            <div className="flex flex-col gap-3 sm:flex sm:flex-row sm:flex-wrap">
              <ClassCards classesList={classesList} />
            </div>
          ) : isLoading ? (
            <p>Loading classes...</p>
          ) : (
            <p>No classes found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SchoolAddClasses;
