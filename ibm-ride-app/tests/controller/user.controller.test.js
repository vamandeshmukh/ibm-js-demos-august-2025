// console.log("user.controller.test.js");

import { jest, describe, it, expect, beforeAll, beforeEach } from "@jest/globals";
import express from "express";
import request from "supertest";

jest.unstable_mockModule("../../src/services/user.service.js", () => {
    const mockGetUserProfile = jest.fn();
    return {
        default: jest.fn().mockImplementation(() => ({
            getUserProfile: mockGetUserProfile
        })),
        mockGetUserProfile
    };
});

const { default: _UserService, mockGetUserProfile } = await import("../../src/services/user.service.js");
const userControllerModule = await import("../../src/controllers/user.controller.js");

const getUserById = userControllerModule.default || userControllerModule.getUserById;

describe("UserController.getUserById", () => {
    let app;

    beforeAll(() => {
        app = express();
        app.use(express.json());

        if (typeof getUserById === 'function') {
            app.get("/api/users/:id", getUserById);
        } else {
            throw new Error('getUserById is not a function');
        }
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should return 200 and user JSON when found", async () => {

        mockGetUserProfile.mockResolvedValue({ id: 1, name: "Monu" });

        const res = await request(app).get("/api/users/1");

        expect(res.status).toBe(200);
        expect(res.body).toEqual({ id: 1, name: "Monu" });
        expect(mockGetUserProfile).toHaveBeenCalledWith(expect.any(String));
        expect(mockGetUserProfile).toHaveBeenCalledWith("1");
    });
});