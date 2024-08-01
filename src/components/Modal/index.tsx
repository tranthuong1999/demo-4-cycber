import React from 'react';
import { Modal, Backdrop, Fade, Box, useTheme, useMediaQuery } from '@mui/material';

interface ResponsiveModalProps {
    open: boolean;
    handleClose: () => void;
}

const ResponsiveModal: React.FC<ResponsiveModalProps> = ({ open, handleClose }) => {
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
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
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
                        boxShadow: 24,
                        p: 4,
                        // width: getModalWidth(),
                        width: "1000px",
                        maxWidth: 600,
                    }}
                >
                    <h2 id="transition-modal-title">Modal Title</h2>
                    <p id="transition-modal-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id purus nec lorem convallis fringilla.</p>
                </Box>
            </Box>
        </Modal>
    );
};

export default ResponsiveModal;
