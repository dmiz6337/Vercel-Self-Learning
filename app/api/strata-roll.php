<?php
// Example data for the strata roll (replace with DB connection if needed)
$strataRoll = [
    [
        'unit' => 'Unit 101',
        'owner' => 'Alice Smith',
        'contact' => 'alice.smith@email.com',
        'phone' => '0400 111 222',
        'entitlement' => 10
    ],
    [
        'unit' => 'Unit 102',
        'owner' => 'Bob Lee',
        'contact' => 'bob.lee@email.com',
        'phone' => '0400 222 333',
        'entitlement' => 8
    ],
    [
        'unit' => 'Unit 103',
        'owner' => 'Caroline Niles',
        'contact' => 'caroline.niles@email.com',
        'phone' => '0400 333 444',
        'entitlement' => 12
    ],
    // Add more units as needed
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strata Roll</title>
    <style>
        body { font-family: Arial, sans-serif; background: #f7f7f7; margin: 0; padding: 0; }
        .container { max-width: 800px; margin: 40px auto; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px #0001; padding: 32px; }
        h1 { text-align: center; color: #333; }
        table { width: 100%; border-collapse: collapse; margin-top: 32px; }
        th, td { padding: 12px 8px; border-bottom: 1px solid #eee; text-align: left; }
        th { background: #f0f0f0; color: #222; }
        tr:last-child td { border-bottom: none; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Strata Roll</h1>
        <table>
            <thead>
                <tr>
                    <th>Unit</th>
                    <th>Owner</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Entitlement</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($strataRoll as $entry): ?>
                    <tr>
                        <td><?= htmlspecialchars($entry['unit']) ?></td>
                        <td><?= htmlspecialchars($entry['owner']) ?></td>
                        <td><?= htmlspecialchars($entry['contact']) ?></td>
                        <td><?= htmlspecialchars($entry['phone']) ?></td>
                        <td><?= htmlspecialchars($entry['entitlement']) ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</body>
</html>
