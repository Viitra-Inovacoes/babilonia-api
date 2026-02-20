export class JwtPayload {
  username: string;
  sub: number;
  iat?: number;
  exp?: number;
}
