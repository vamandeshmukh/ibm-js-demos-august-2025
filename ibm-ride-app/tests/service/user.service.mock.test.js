// console.log("user.service.test.js");

import { jest, describe, it, expect, beforeEach } from "@jest/globals";

jest.unstable_mockModule("../../src/repositories/mysql/user.repository.js", () => {
  const mockFindById = jest.fn();
  return {
    default: jest.fn().mockImplementation(() => ({
      findById: mockFindById
    })),
    mockFindById
  };
});

const { default: UserService } = await import("../../src/services/user.service.js");
const { default: _MockedRepo, mockFindById } = await import("../../src/repositories/mysql/user.repository.js");

describe("UserService.getUserProfile", () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
    jest.clearAllMocks();
  });

  it("should return user response when user exists", async () => {
    const mockUser = {
      id: 1,
      name: "Monu",
      toResponse: jest.fn().mockReturnValue({ id: 1, name: "Monu" })
    };

    mockFindById.mockResolvedValue(mockUser);

    const result = await userService.getUserProfile(1);
    expect(result).toEqual({ id: 1, name: "Monu" });
    expect(mockFindById).toHaveBeenCalledWith(1);
    expect(mockUser.toResponse).toHaveBeenCalled();
  });

  it("should throw NotFoundError when user not found", async () => {
    mockFindById.mockResolvedValue(null);

    await expect(userService.getUserProfile(99))
      .rejects
      .toThrow("User not found");
    expect(mockFindById).toHaveBeenCalledWith(99);
  });
});

