const supertest = require('supertest');
import {jest} from '@jest/globals';
import app from '../app';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from '../models/users';

jest.mock('../models/users');

const testUser = {
  id: 1,
  first_name: 'Name',
  last_name: 'Surname',
  email: 'example@example.com',
};

describe('users routes', () => {
  describe('GET /', () => {
    test('should return all users', async () => {
      getUsers.mockResolvedValue([testUser]);
      const response = await supertest(app).get('/users');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        success: true,
        payload: [testUser],
      });
    });

    test('should return error if getUsers fails', async () => {
      const errorMessage = 'Error retrieving users';
      getUsers.mockRejectedValue(new Error(errorMessage));
      const response = await supertest(app).get('/users');
      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        success: false,
        message: errorMessage,
      });
    });
  });

  describe('GET /:id', () => {
    test('should return user by id', async () => {
      getUserById.mockResolvedValue(testUser);
      const response = await supertest(app).get('/users/1');
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        success: true,
        payload: testUser,
      });
    });

    test('should return error if getUserById fails', async () => {
      const errorMessage = 'Error retrieving user by id';
      getUserById.mockRejectedValue(new Error(errorMessage));
      const response = await supertest(app).get('/users/1');
      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        success: false,
        message: errorMessage,
      });
    });
  });

  describe('POST /', () => {
    test('should create a new user', async () => {
      const newUser = {
        name: 'New User',
        email: 'newuser@test.com',
        age: 25,
      };
      createUser.mockResolvedValue(testUser);
      const response = await supertest(app)
        .post('/users')
        .send({ payload: newUser });
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        success: true,
        payload: testUser,
      });
    });

    test('should return error if createUser fails', async () => {
      const newUser = {
        name: 'New User',
        email: 'newuser@test.com',
        age: 25,
      };
      const errorMessage = 'Error when posting new user';
      createUser.mockRejectedValue(new Error(errorMessage));
      const response = await supertest(app)
        .post('/users')
        .send({ payload: newUser });
      expect(response.status).toBe(500);
      expect(response.body).toEqual({
        success: false,
        message: errorMessage,
      });
    });
  });

  describe('PUT /:id', () => {
    test('should update user by id', async () => {
      const updatedUser = {
        name: 'Updated User',
        email: 'updated@test.com',
        age: 35,
      };
      updateUser.mockResolvedValue(updatedUser);
      const response = await supertest(app)
        .put('/users/1')
        .send({ payload: updatedUser });
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        success: true,
        payload: updatedUser,
      });
    });

    describe('DELETE /:id', () => {
      test('should delete user by id', async () => {
        const deletedUser = testUser;
        deleteUser.mockResolvedValue(deletedUser);
        const response = await supertest(app).delete('/users/1');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
          success: true,
          payload: deletedUser,
        });
      });
    
      test('should return error if deleteUser fails', async () => {
        const errorMessage = 'Error when deleting user by id';
        deleteUser.mockRejectedValue(new Error(errorMessage));
        const response = await supertest(app).delete('/users/1');
        expect(response.status).toBe(500);
        expect(response.body).toEqual({
          success: false,
          message: errorMessage,
        });
      });
    });
  })
})    