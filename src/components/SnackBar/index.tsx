import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import "./style.scss";
import Alert from '@mui/material/Alert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

interface CommonSnackbarProps {
    open: boolean;
    message: string;
    duration?: number;
    onClose: () => void;
    isSuccess?: boolean;
}

const CommonSnackbar: React.FC<CommonSnackbarProps> = ({ open, message, duration = 3000, onClose, isSuccess }) => {
    const [isOpen, setIsOpen] = useState(open);

    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsOpen(false);
        onClose();
    };

    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={duration}
            // @ts-ignore
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            classes={{ root :"snack-bar-common"}}
        >
            <Alert
                onClose={handleClose}
                severity={isSuccess ? 'success' : 'error'}
                iconMapping={{
                    success: <CheckCircleIcon fontSize="inherit" />,
                    error: <ErrorIcon fontSize="inherit" />
                }}
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default CommonSnackbar;
