/**
 * @description Takes two GET request query parameters and return specific information in JSON format
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @returns {object} JSON
 */

export const getStageOneTask = async (req, res) => {
  try {
    const { slack_name, track } = req.query;

    if (!slack_name || !track) {
      return res.status(400).json({
        message: "error",
        error: "slack_name and track are required",
      });
    }

    const date = new Date();
    const days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const current_day_of_the_week = date.getDay();
    const current_day = days_of_the_week[current_day_of_the_week];

    // current UTC time in this format 2023-09-07T19:57:18Z
    const utc_time = date.toISOString().replace(/\.\d+/, "");

    // github url of the file being run
    const github_file_url =
      "https://github.com/aniebietafia/hng-internship-tasks/blob/main/stage_one_task/src/server.js";

    // github url of the full source code
    const github_repo_url = "https://github.com/aniebietafia/hng-internship-tasks";

    // status code of success
    const status_code = 200;

    const data = {
      slack_name,
      current_day,
      utc_time,
      track,
      github_file_url,
      github_repo_url,
      status_code,
    };

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: "error",
      error: error.message,
    });
  }
};
