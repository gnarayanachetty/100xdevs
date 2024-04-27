import express from 'express';
import swaggerUi from 'swagger-ui-express'
import { openApiSpec } from './openapispec.js';

const app = express();
const port = 3000;

app.use(express.json());

let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
];

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get a list of users
 *     description: Retrieves a list of users, optionally filtered by name.
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Name filter for user lookup.
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
 
app.get('/users', (req, res) => {
    const { userName } = req.query;

    if (userName) {
        //@ts-ignore
        const filteredUsers = users.filter(user => user.name.toLowerCase().includes(userName.toLowerCase()));
        res.json(filteredUsers);
    } else {
        res.json(users);
    }
});
/* npx openapi-typescript-codegen --input ./openapispec.json --output ./client */
//@ts-ignore
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpec));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});