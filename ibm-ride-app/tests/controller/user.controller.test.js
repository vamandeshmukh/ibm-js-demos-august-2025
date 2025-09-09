import { getAllUsers, getUserById } from "../../src/controllers/user.controller.js";
import mongoose from "mongoose";
import pool from "../../src/config/mysql.js";

describe("User Controller", () => {

    let res;
    let next;

    beforeEach(() => {
        res = {
            status: function (code) {
                this.statusCode = code;
                return this;
            },
            json: function (data) {
                this.body = data;
                return data;
            }
        };
        next = (err) => { res.error = err; };
    });

    afterAll(async () => {
        await mongoose.connection.close();
        await pool.end();
    });

    describe("UserController", () => {
        it("getAllUsers", async () => {

            const req = {};
            
            await getAllUsers(req, res, next);

            expect(res.body).toBeInstanceOf(Array);
        });

        it("getAllUsers", async () => {
            const req = {};
            await getAllUsers(req, res, next);

            expect(res.body).toHaveLength(6);
        });

        it("getAllUsers", async () => {
            const req = {};

            await expect(getAllUsers(req, res, next))
                .resolves
                .not.toThrow();
        });
    });

    describe("UserController", () => {

        it("getUserById", async () => {
            const testUserId = 1;
            const req = { params: { id: testUserId } };

            await getUserById(req, res, next);

            expect(res.body).toBeDefined();
            expect(res.body.id).toBe(testUserId);
        });

        it("getUserById", async () => {
            const nonExistentId = 7;
            const req = { params: { id: nonExistentId } };

            await getUserById(req, res, next);

            expect(res.body).toBeUndefined(); // Pratik
        });

        it("getUserById", async () => {
            const testUserId = 1;
            const req = { params: { id: testUserId } };

            await getUserById(req, res, next);

            expect(res.body).toEqual(
                expect.objectContaining({
                    id: expect.any(Number),
                })
            );
        });
    });
});