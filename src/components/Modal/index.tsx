import React from 'react';
import { Modal, Box, useTheme, useMediaQuery } from '@mui/material';

interface ResponsiveModalProps {
    open: boolean;
    handleClose?: () => void;
    content?: any;
    className?: string
}

const ResponsiveModal: React.FC<ResponsiveModalProps> = ({ open, handleClose, content, className }) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const getModalWidth = () => {
        if (isExtraSmallScreen) return '95%';
        if (isSmallScreen) return '90%';
        return '80%';
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            classes={{ root: className }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                }}
            >
                <Box
                    sx={{
                        width: getModalWidth(),
                        maxWidth: 600,
                        backgroundColor: "#fff",
                        borderRadius: 2
                    }}
                >
                    {content}
                </Box>
            </Box>
        </Modal>
    );
};

export default ResponsiveModal;
