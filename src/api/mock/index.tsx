import Mock from "mockjs";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const mockIMG = Mock.mock(
	`${baseUrl}slider/list`,
	Mock.mock({ "data|6": [{ url: Mock.Random.image("540x270") }] })
);
