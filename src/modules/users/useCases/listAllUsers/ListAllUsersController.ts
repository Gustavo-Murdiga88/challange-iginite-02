import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { user_id } = request.headers;

      const userAdmin = this.listAllUsersUseCase.execute({
        user_id: user_id as string,
      });

      return response.status(200).json(userAdmin);
    } catch {
      return response.status(400).json({
        error: "mensagem do erro",
      });
    }
  }
}

export { ListAllUsersController };
