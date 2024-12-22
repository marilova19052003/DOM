import GameSavingLoader from "./GameSavingLoader";
import read from "./reader";
import json from "./parser";

jest.mock("./reader");
jest.mock("./parser");

test("GameSavingLoader.load should return game saving data", async () => {
  const mockData = new ArrayBuffer(100);
  read.mockResolvedValue(mockData);
  json.mockResolvedValue(
    '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'
  );

  const saving = await GameSavingLoader.load();
  expect(saving).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  });
});
